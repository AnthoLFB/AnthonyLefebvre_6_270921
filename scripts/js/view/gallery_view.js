class GalleryView
{
    constructor(medias, photographer)
    {
        this.medias = medias;
        this.photographer = photographer;

        this.removeElementsByClass("photographer__media__card");

        this.medias.forEach(media => {
            if(media.constructor.name == "Image")
            {
                this.createImageElement(media);
            }
            else if(media.constructor.name == "Video")
            {
                this.createVideoElement(media);
            }            
        });
    }

    createImageElement(media)
    {
        //Récupération du container
        let container = document.querySelector('.photographer__media');

        /* ---- Création de l'article contenant le media du photographe ---- */

        //Création de l'article
        let article = document.createElement("article");

        //Ajout d'une classe
        article.classList.add("photographer__media__card");

        // Ajout de l'article
        container.appendChild(article);

        let htmlSegment = 
            `
                <a class="photographer__media__card__link" href="#"><img class="photographer__media__card__link__img" src="images/photographers/${this.photographer.name}/${media.image}"></a>
                <p class="photographer__media__card__title">${media.title}</p>
                <p class="photographer__media__card__likes">${media.likes}</p>
            `;

        article.innerHTML = htmlSegment;
    }
        

    createVideoElement(media)
    {
        //Récupération du container
        let container = document.querySelector('.photographer__media');

        /* ---- Création de l'article contenant le media du photographe ---- */

        //Création de l'article
        let article = document.createElement("article");

        //Ajout d'une classe
        article.classList.add("photographer__media__card");

        // Ajout de l'article
        container.appendChild(article);

        let htmlSegment = 
            `
                <video controls>                
                    <source src="images/photographers/${this.photographer.name}/${media.video}" type="video/mp4">
                </video>
                <p class="photographer__media__card__title">${media.title}</p>
                <p class="photographer__media__card__likes">${media.likes}</p>
            `;

        article.innerHTML = htmlSegment;
    }

    removeElementsByClass(className)
    {
        var elements = document.getElementsByClassName(className);

        while(elements.length > 0)
        {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}