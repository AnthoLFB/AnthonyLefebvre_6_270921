class App
{
    constructor()
    {
        this.tags = [];
        this.photographers = [];
        this.photographer = null;
        this.medias = [];
        this.view = null;
        this.eventDispatcher = new EventDispatcher();
        this.eventDispatcher.register('tagSelected');
    }

    init()
    {
        // Récupération de l'URL courante
        let currentUrl = window.location.href;

        const photographerRepository = new PhotographerRepository('photographers.json');

        if(currentUrl.includes("index.html") === true)
        {
            photographerRepository.findAll()
            .then((photographers) => {
                this.photographers = photographers;
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
                this.view = new HomeView(this);
            })
            .then(() => {
                this.view.render();
            });
        }
        else if(currentUrl.includes("photographer_page.html") === true)
        {
            //On fait appel à searchParams
            let params = (new URL(document.location)).searchParams;

            // Récupère le paramètre nommé id dans l'url
            let id = params.get('id');
            
            //On récupère tous les photographes
            photographerRepository.findAll()

            //On cherche le photographe avec l'id correspondant et on l'assigne à la variable this.photographer
            .then((photographers) => {
                photographers.forEach(photographer => {
                    if(photographer.id == id)
                    {
                        this.photographer =  photographer;
                    }
                });
            })
            .then(() => {
                this.view = new PhotographerPageView(this);
            })
            .then(() => {
                this.view.render();
            });
            /*.then(() => {

                const mediaRepository = new MediaRepository('photographers.json');

                mediaRepository.findMediaByIdPhotographer(id)
                .then((media) => {
                    console.log(media);
                });
            });*/
        }  
    }
}

(new App()).init();