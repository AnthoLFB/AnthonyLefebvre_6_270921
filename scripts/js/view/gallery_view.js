class GalleryView
{
    constructor(medias, photographer)
    {
        //Récupération des médias
        this.medias = medias;

        //Récupération du photographe (correspondant à l'id)
        this.photographer = photographer;

        // Création de l'event sur la liste permettant de trier les médias
        const selectElement = document.querySelector('.photographer__media__sort__list');

        //Evènement permettant de changer le contenu en fonction de la selection
        selectElement.addEventListener('change', (event) => {
            this.render(event.target.value);
        });

        //Déclanche le render au chargement de la page
        this.render();
    }

    //Fonction permettant d'afficher le contenu dynamique
    render(filter)
    {
        // Triage du tableau de médias en fonction de la valeur donnée (popularité, date ou titre)
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

        //Une fois le tri effectué, on supprime le contenu déjà existant pour eviter les doublons
        this.removeElementsByClass("photographer__media__card");

        //Pour chaques médias, on determine si c'est une image ou une vidéo grace à son constructeur
        this.medias.forEach(media => {

            //Si c'est une image, on fait appel à la fonction permettant de créer l'élément HTML correspondant 
            if(media.constructor.name == "Photo")
            {
                this.createImageElement(media);
            }
            //Si c'est une vidéo, alors on fait appel à la fonction permettant de créer l'élément HTML correspondant 
            else if(media.constructor.name == "Video")
            {
                this.createVideoElement(media);
            }            
        });

        //Lorque tous les éléments sont affiché alors on initie la lightbox

        //Récupération des liens du DOM
        const links = Array.from(document.querySelectorAll(".photographer__media__card__link" ));
        
        //Récupération des liens des images
        const gallery = links.map(link => link.getAttribute("href"));

        //Initialisation de la lightbox
        links.forEach(link =>
            {
                link.addEventListener("click", e =>{
                    e.preventDefault();
                    new Lightbox(e.currentTarget.getAttribute("href"), gallery);
                })
            })
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

        //Création des éléments HTML
        let htmlSegment = 
            `
                <a class="photographer__media__card__link" href="images/photographers/${this.photographer.name}/${media.image}"><img class="photographer__media__card__link__img" src="images/photographers/${this.photographer.name}/${media.image}"></a>
                <p class="photographer__media__card__title">${media.title}</p>
                <p class="photographer__media__card__likes">${media.likes}</p>
            `;

        //Ajout des éléments HTML    
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

        //Création des éléments HTML
        let htmlSegment = 
            `
                <a class="photographer__media__card__link" href="images/photographers/${this.photographer.name}/${media.video}">
                    <video preload="metadata">                
                        <source src="images/photographers/${this.photographer.name}/${media.video}#t=0.5" type="video/mp4">
                    </video>
                </a>
               
                <p class="photographer__media__card__title">${media.title}</p>
                <p class="photographer__media__card__likes">${media.likes}</p>
            `;

        //Ajout des éléments HTML
        article.innerHTML = htmlSegment;
    }

    //Permet de retirer les éléments du DOM avec une classe spécifiée
    removeElementsByClass(className)
    {
        //Récupère tous les éléments ayant la classe spécifiée
        var elements = document.getElementsByClassName(className);

        //Tant qu'il y a des éléments, on le supprime via son parent
        while(elements.length > 0)
        {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}