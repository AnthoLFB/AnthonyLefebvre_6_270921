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

       
    } 

    render()
    {
        //Fais appel à la classe pour afficher le photographe
        new PhotographerProfilView(this.photographer);

        //Création de la vue avec les médias du photographe ainsi que ses données personnelles
        new GalleryView(this.photographerMedia, this.photographer);
    }
}