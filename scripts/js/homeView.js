class HomeView
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
        }
    }    
}

new HomeView().tagsRender();
