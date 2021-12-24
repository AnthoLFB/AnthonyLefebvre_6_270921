/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
//Vue globale
class PhotographerPageView
{
    constructor(app)
    {
        this.app = app;

        //Fera référence à un photographe correspondant à un id
        this.photographer = null;

        //Fera référence aux médias du photographe séléctionné
        this.photographerMedia = [];

        //On fait appel à searchParams
        this.params = (new URL(document.location)).searchParams;

        // Récupère le paramètre nommé id dans l'url
        this.id = this.params.get('id');

        //Récupération des infos du photographe avec son id
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
            }
        });
    } 

    render()
    {
        //Fais appel à la classe pour afficher le photographe
        new PhotographerProfilView(this.photographer);

        //Fais appel à la classe pour créer le formulaire de contacte
        new contactForm(this.photographer);

        //Création de la vue avec les médias du photographe ainsi que ses données personnelles
        new GalleryView(this.photographerMedia, this.photographer);
    }
}