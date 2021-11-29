class GalleryView
{
    constructor(medias, photographer)
    {
        this.medias = medias;
        this.photographer = photographer;

        // Création de l'event sur la liste permettant de trier
        const selectElement = document.querySelector('.photographer__media__sort__list');

        selectElement.addEventListener('change', (event) => {
            
            this.render(event.target.value);
        });

        this.render();
    }

    render(filter)
    {
        // Triage du tableau en fonction de la valeur donnée
        switch (filter) {
        case 'title':
            this.medias.sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
            })
            break;
        case 'date':
            this.medias.sort(function(a, b){
                if(a.date < b.date) { return -1; }
                if(a.date > b.date) { return 1; }
                return 0;
            })
            break;
        default:
            this.medias.sort(function(a, b){
                if(a.likes < b.likes) { return -1; }
                if(a.likes > b.likes) { return 1; }
                return 0;
            })
        }

        this.removeElementsByClass("photographer__media__card");

        this.medias.forEach(media => {
            if(media.constructor.name == "ImageTEST")
            {
                this.createImageElement(media);
            }
            else if(media.constructor.name == "Video")
            {
                this.createVideoElement(media);
            }            
        });

        Lightbox.init();
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
                <a class="photographer__media__card__link" href="images/photographers/${this.photographer.name}/${media.image}"><img class="photographer__media__card__link__img" src="images/photographers/${this.photographer.name}/${media.image}"></a>
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