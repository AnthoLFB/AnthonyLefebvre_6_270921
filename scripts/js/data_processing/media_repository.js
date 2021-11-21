class MediaRepository extends DataRepository 
{
    findAll()
    {
        return this.getData()
        .then((data) => data.media.map((media) => 
            new Media(media)
        ));
    }
}