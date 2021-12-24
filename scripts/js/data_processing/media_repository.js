/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

//Cette classe permet de récupérer les médias 
class MediaRepository extends DataRepository 
{
    //Retourne une promesse avec les données au format JSON
    findAll()
    {
        return this.getData()
        .then((data) => data.media.map((media) => 
            // eslint-disable-next-line no-undef
            Media.create(media)
        ));
    }
}