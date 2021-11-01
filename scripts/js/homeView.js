class HomeView
{
    constructor(tags, photographers)
    {
        this.tags = tags;
        this.photographers = photographers;
    }

    renderTags()
    {
        //Récupération du container
        let container = document.querySelector('.header__navBar__list');

        // Boucle sur un tableau d'objet Tag
        this.tags.forEach(tag => 
        {
             // Création du lien
            let listItem = document.createElement("li");
            
            // Ajout d'une classe
            listItem.classList.add("header__navBar__list__item");

            // Ajout de l'item à la liste
            container.appendChild(listItem);

            // Création d'un lien via la class TagView
            let tagLink = new TagView(tag).createLink();

            listItem.appendChild(tagLink);
        });
    }
}

class TagView extends HomeView
{
    constructor(tag)
    {
        super();
        this.tag = tag;
    }

    createLink()
    {
        // Création du lien
        let htmlLink = document.createElement("a");
        
        // Ajout d'une classe
        htmlLink.classList.add("photographer-tag");

        // Création du nom du lien
        let htmlLinkName = document.createTextNode("#" + this.tag.name);

        // Ajout du texte 
        htmlLink.appendChild(htmlLinkName);

        // Cible du lien (redirection)
        htmlLink.href = "#";
        
        this.registerEvents(htmlLink);

        return htmlLink;
    }

    registerEvents(htmlLink)
    {
        htmlLink.addEventListener('click', this.select);
    }

    select()
    {
        console.log("test");
    }
}






/*class HomeView
{
    //Permet d'afficher les tags dans la navbar sur la page d'accueil
    async tagsRender()
    {
        //Appel et récupération des données
        let tagRecovery = new Tag()
        let tagsArray = await tagRecovery.getAllTags();

        if(tagsArray === undefined)
        {
            let htmlSegment = `<li class="header__navBar__list__item"><p class="error">Aucun tag de recherche n'est disponible</p></li>`;

            //Récupération du container
            let container = document.querySelector('.header__navBar__list');

            //Ajout des éléments HTML
            container.innerHTML = htmlSegment;
        }
        else
        {
            //Déclaration de la chaine de caractères contenant le HTML
            let htmlSegment = "";

            //Boucle sur le tableau afin d'afficher les tags
            tagsArray.forEach(tag => {

                 //Insertion de l'élément HTML avec le tag concerné
                 htmlSegment += `<li class="header__navBar__list__item"><a class="header__navBar__list__item__link" href="#">#${tag}</a></li>`;
            });

            //Récupération du container
            let container = document.querySelector('.header__navBar__list');

            //Ajout des éléments HTML
            container.innerHTML = htmlSegment;

            new Tag().addEventOnTags("header__navBar__list__item__link");
        }
    }

    async allPhotographersRender()
    {
        //Appel et récupération des données
        let photographerRecovery = new Photographer()
        let photographersArray = await photographerRecovery.getPhotographers();

        let htmlSegment = "";

        if(photographersArray === undefined)
        {
            let htmlSegment = `
                            <article class="main__contenu__photographer-card">

                                <p class="main__contenu__photographer-card__error">Aucun photographe n'a été trouvé.</p>

                            </article>
            `;

            //Récupération du container
            let container = document.querySelector('.main__contenu');

            //Ajout des éléments HTML
            container.innerHTML = htmlSegment;
        }
        else
        {
            photographersArray.forEach(photographer =>
            {

                htmlSegment += `
                                <article class="main__contenu__photographer-card">

                                    <a class="main__contenu__photographer-card__link" href="#">
                                        <img class="main__contenu__photographer-card__link__image" src="images/photographers/photographersProfilPicture/${photographer.portrait}" alt="Photo de profil pour le photographe :  ${photographer.name}"/>
                                        <h2 class="main__contenu__photographer-card__link__title">${photographer.name}</h2>
                                    </a>

                                    <p class="main__contenu__photographer-card__catchphrase">${photographer.tagline}</p>

                                    <ul class="main__contenu__photographer-card__tag-list">
                `;

                //Boucle sur chaques tags du photographe
                photographer.tags.forEach(tag =>
                {      
                    //Création de l'élément HTML avec le tag concerné
                    htmlSegment += `<li class="main__contenu__photographer-card__tag-list__item"><a class="main__contenu__photographer-card__tag-list__item__link" href="#">#${tag}</a></li>`;
                });
                
                //Fin de l'article
                htmlSegment += `
                                    
                                    </ul>

                                </article>
                `;
            });

            //Récupération du container
            let container = document.querySelector('.main__contenu');

            //Ajout des éléments HTML
            container.innerHTML = htmlSegment;

            new Tag().addEventOnTags("main__contenu__photographer-card__tag-list__item__link");
        }
    }
    
    async filteredPhotographersRender(filter)
    {
        //Appel et récupération des données
        let photographerRecovery = new Photographer()
        let photographersArray = await photographerRecovery.getPhotographers(filter.substr(1));

        let htmlSegment = "";

        if(photographersArray === undefined)
        {
            let htmlSegment = `
                            <article class="main__contenu__photographer-card">

                                <p class="main__contenu__photographer-card__error">Aucun photographe n'a été trouvé.</p>

                            </article>
            `;

            //Récupération du container
            let container = document.querySelector('.main__contenu');

            //Ajout des éléments HTML
            container.innerHTML = htmlSegment;
        }
        else
        {
            photographersArray.forEach(photographer =>
            {

                htmlSegment += `
                                <article class="main__contenu__photographer-card">

                                    <a class="main__contenu__photographer-card__link" href="#">
                                        <img class="main__contenu__photographer-card__link__image" src="images/photographers/photographersProfilPicture/${photographer.portrait}" alt="Photo de profil pour le photographe :  ${photographer.name}"/>
                                        <h2 class="main__contenu__photographer-card__link__title">${photographer.name}</h2>
                                    </a>

                                    <p class="main__contenu__photographer-card__catchphrase">${photographer.tagline}</p>

                                    <ul class="main__contenu__photographer-card__tag-list">
                `;

                //Boucle sur chaques tags du photographe
                photographer.tags.forEach(tag =>
                {      
                    //Création de l'élément HTML avec le tag concerné
                    htmlSegment += `<li class="main__contenu__photographer-card__tag-list__item"><a class="main__contenu__photographer-card__tag-list__item__link" href="#">#${tag}</a></li>`;
                });
                
                //Fin de l'article
                htmlSegment += `
                                    
                                    </ul>

                                </article>
                `;
            });

            //Récupération du container
            let container = document.querySelector('.main__contenu');

            //Ajout des éléments HTML
            container.innerHTML = htmlSegment;

            new Tag().addEventOnTags("main__contenu__photographer-card__tag-list__item__link");
        }
    }
}

new HomeView().tagsRender();
new HomeView().allPhotographersRender();

*/
