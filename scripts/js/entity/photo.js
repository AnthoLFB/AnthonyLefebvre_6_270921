/* eslint-disable no-unused-vars */

//Permet de créer un objet photo
class Photo
{
    constructor(id, photographerId, title, image, tags, likes, date, price)
    {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.tags = tags;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }
}