/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//Cette classe va permettre de créer un objet de type image ou vidéo
class Media
{
    static create(media)
    {
        //Retourne un objet Video si le champ "image" n'est pas présent dans la donnée JSON récupéré.
        if(media.image === undefined)
        {
            return new Video(media.id, media.photographerId, media.title, media.video, media.tags, media.likes, media.date, media.price);
        }
        //Retourne un objet de type Photo
        else
        {
            return new Photo(media.id, media.photographerId, media.title, media.image, media.tags, media.likes, media.date, media.price);
        }
    }
}