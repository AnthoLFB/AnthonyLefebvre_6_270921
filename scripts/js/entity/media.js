class Media
{
    constructor(media)
    {
        this.media = media;
        
        if(this.media.image === undefined)
        {
            return new Video(this.media.id, this.media.photographerId, this.media.title, this.media.video, this.media.tags, this.media.likes, this.media.date, this.media.price);
        }
        else
        {
            return new ImageTEST(this.media.id, this.media.photographerId, this.media.title, this.media.image, this.media.tags, this.media.likes, this.media.date, this.media.price);
        }
    }
}