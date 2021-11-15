class MediaRepository extends DataRepository 
{
    findMediaByIdPhotographer(givenPhotographerId) 
    {
        //Permet de récupérer tous les photographes et de les retourner dans un tableau "photographers" sous forme d'objet photographe.
        return this.getData()
            .then((data) =>
            {
                data.media.forEach(media => {
                    if(media.photographerId = givenPhotographerId)
                    {
                        console.log(media);
                        if(media.image === undefined)
                        {
                            console.log("video");
                        }
                        else
                        {
                            console.log("image");
                        }
                        //console.log(new Media(media.id, media.photographerId, media.title, media.image, media.tags, media.likes, media.date, media.price));
                    }
                });
            })
            /*.then((data) => data.media.map((media) => new Media(
                media.id, 
                media.photographerId, 
                media.title, 
                media.image, 
                media.tags, 
                media.likes, 
                media.date, 
                media.price
        )));*/
    }
}