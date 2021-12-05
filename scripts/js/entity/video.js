//Permet de créer un objet Vidéo
class Video
{
    constructor(id, photographerId, title, video, tags, likes, date, price)
    {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.video = video;
        this.tags = tags;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }
}