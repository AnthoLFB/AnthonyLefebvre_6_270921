//Vue permettant d'afficher les photographes sur la page d'accueil
class PhotographerView
{
    constructor(eventDispatcher, photographers)
    {
        //tableau de photographes
        this.photographers = photographers;
        
        //Permet de gérer les events sur les tags
        this.eventDispatcher = eventDispatcher;

        //Créer les élements du DOM
        this.createPhotographerElement();
    }

    createPhotographerElement()
    {    
        //Récupération du container
        let container = document.querySelector('.main__contenu');

        //Supprime l'élément lorsque l'on tri les photographes par tags
        this.removeElementsByClass("main__contenu__photographer-card");

        this.photographers.forEach(photographer => {

            /* ---- Création de l'article ---- */

            //Création d'un article
            let article = document.createElement("article");

            // Ajout d'une classe
            article.classList.add("main__contenu__photographer-card");

            // Ajout de l'item à la liste
            container.appendChild(article);

            /* --- Ajout du contenu --- */

            let htmlSegment = 
            `
                <a aria-label="Lien permettant d'afficher la page contenant le profil, les informations et les différents médias de ${photographer.name}." class="main__contenu__photographer-card__link" href="photographer_page.html?id=${photographer.id}">
                    <img class="main__contenu__photographer-card__link__image" src="images/photographers/photographersProfilPicture/${photographer.portrait}" alt="Portrait de  ${photographer.name}. Lien permettant d'accéder au profil de ${photographer.name}."/>
                    <h2 class="main__contenu__photographer-card__link__title">${photographer.name}</h2>
                </a>

                <p class="main__contenu__photographer-card__localisation">${photographer.city}, ${photographer.country}</p>
                <p class="main__contenu__photographer-card__catchphrase">${photographer.tagline}</p>
                <p class="main__contenu__photographer-card__price">${photographer.price}€/jour</p>
            `;

            article.innerHTML = htmlSegment;

            //Création de la liste des tags
            let photographerTagList = document.createElement("ul");

            //Ajout de la classe
            photographerTagList.classList.add("main__contenu__photographer-card__tag-list");

            photographerTagList.setAttribute("aria-label", "Navigation secondaire. Vous pouvez filtrer les photographes selon le contenu qu'ils produisent en cliquant sur l'un des items suivants.");

            article.appendChild(photographerTagList);

            //Boucle sur chaques tags du photographe
            photographer.tags.forEach(tag => {

                //Création des items
                let photographerTagListItem = document.createElement("li");

                //Ajout de la classe
                photographerTagListItem.classList.add("main__contenu__photographer-card__tag-list__item");

                photographerTagList.appendChild(photographerTagListItem);

                // Création d'un lien via la class TagView
                let tagLink = new TagView(this.eventDispatcher, tag);

                photographerTagListItem.appendChild(tagLink.element);
            });           
        });    
    }

    //Permet de retirer les éléments du dom déjà existant pour éviter les doublons
    removeElementsByClass(className)
    {
        var elements = document.getElementsByClassName(className);

        while(elements.length > 0)
        {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}