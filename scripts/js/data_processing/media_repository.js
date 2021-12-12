//Cette classe permet de récupérer les médias 
class MediaRepository extends DataRepository 
{
    //Retourne une promesse avec les données au format JSON
    findAll()
    {
        return this.getData()
        .then((data) => data.media.map((media) => 
            Media.create(media)
        ));
    }
}