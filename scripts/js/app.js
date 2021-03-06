/* eslint-disable no-undef */

//Classe pricipale qui sert au lancement de l'application
class App
{
    constructor()
    {
        //Fera référence aux tags
        this.tags = [];

        //Fera référence aux photographes
        this.photographers = [];

        //Fera référence aux médias
        this.medias = [];

        //Permettra d'appeler la vue selon l'url 
        this.view = null;

        //Permettra de gérer les events sur les tags
        this.eventDispatcher = new EventDispatcher();
        this.eventDispatcher.register('tagSelected');
    }

    init()
    {
        // Récupération de l'URL courante
        let currentUrl = window.location.href;

        /* ---- Récupération des médias ---- */
        const mediaRepository = new MediaRepository('photographers.json');

        mediaRepository.findAll()
        .then((media) =>{
            this.medias = media;
        });

        /* ---- Récupération des photographes ---- */
        const photographerRepository = new PhotographerRepository('photographers.json');

        photographerRepository.findAll()
        .then((photographers) => {

            //Remplissage du tableau avec les photographes
            this.photographers = photographers;

            //Récupération des tags de chaques photographes & suppression des doublons
            this.photographers.forEach((photographer) => {
                let tags = [];
                photographer.tags.forEach((tagName) => {
                    let tag = this.tags.find((tag) => tag.name === tagName);

                    if (typeof tag === "undefined") {
                        tag = new Tag(tagName);
                        this.tags.push(tag);
                    }

                    tags.push(tag);
                });
                photographer.tags = tags;
            });
        })
        .then(() => {
            if(currentUrl.includes("index.html"))
            {
                this.view = new HomeView(this);
            }
            else if(currentUrl.includes("photographer_page.html"))
            {
                this.view = new PhotographerPageView(this);
            }
        })
        .then(() => {
            this.view.render();
        });
    }
}

(new App()).init();