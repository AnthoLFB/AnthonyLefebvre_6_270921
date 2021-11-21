class PhotographerPageView
{
    constructor(app)
    {
        this.app = app;
        this.photographer = null;
        this.photographerMedia = [];

        //On fait appel à searchParams
        this.params = (new URL(document.location)).searchParams;

        // Récupère le paramètre nommé id dans l'url
        this.id = this.params.get('id');

        //Récupération des info du photographe avec son id
        this.app.photographers.forEach( photographer => {

            if(photographer.id == this.id)
            {
                this.photographer =  photographer;
            }
        });

        //Récupération des médias du photographe
        this.app.medias.forEach(media => {
            if(media.photographerId == this.id)
            {
                this.photographerMedia.push(media);
            };
        });

        // Création de l'event sur la liste permettant de trier
        const selectElement = document.querySelector('.photographer__media__sort__list');

        selectElement.addEventListener('change', (event) => {
            
            this.render(event.target.value);
        });
    }

    render(filter)
    {
        //Fais appel à la classe pour afficher le photographe
        new PhotographerProfilView(this.photographer);

        // Triage du tableau en fonction de la valeur donnée
        switch (filter) {
        case 'likes':
            this.photographerMedia.sort(function(a, b){
                if(a.likes < b.likes) { return -1; }
                if(a.likes > b.likes) { return 1; }
                return 0;
            })
            break;
        case 'title':
            this.photographerMedia.sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
            })
            break;
        case 'date':
            this.photographerMedia.sort(function(a, b){
                if(a.date < b.date) { return -1; }
                if(a.date > b.date) { return 1; }
                return 0;
            })
            break;
        default:
            this.photographerMedia.sort(function(a, b){
                if(a.likes < b.likes) { return -1; }
                if(a.likes > b.likes) { return 1; }
                return 0;
            })
        }

        //Création de la vue avec les médias triés
        new GalleryView(this.photographerMedia, this.photographer);
    }
}