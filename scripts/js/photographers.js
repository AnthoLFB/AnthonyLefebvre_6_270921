async function renderPhotographersTags() 
{
    //Appel de la classe 
    let recoveredData = new dataRecovery("photographers.json");
    
    //Récupération des données du JSON
    recoveredData = await recoveredData.getData();

    if(recoveredData === undefined)
    {
        let htmlSegment = `<li class="header__navBar__list__item"><p class="error">Aucun tag de recherche n'est disponible</p></li>`;

        //Récupération du container
        let container = document.querySelector('.header__navBar__list');

        //Ajout des éléments HTML
        container.innerHTML = htmlSegment;
    }
    else
    {
        //Déclaration des variables utiles
        let html = [];

        let tagsArray = [];

        //Boucle sur les resultats de la requête
        recoveredData.photographers.forEach(photographer => {
            
            //Boucle sur les différents tableaux de tags par photographes
            photographer.tags.forEach(tag =>
            {
                // Vérification de l'existance d'un tag pour éviter les doublons
                if (tagsArray.indexOf(tag) === -1) 
                {
                    //S'il n'existe pas, il est enregistré
                    tagsArray.push(tag);
                    
                    //Création de l'élément HTML avec le tag concerné
                    let htmlSegment = `<li class="header__navBar__list__item"><a class="header__navBar__list__item__link" href="#">#${tag}</a></li>`;

                    //Enregistrement de la ligne
                    html += htmlSegment;
                }
            });
        });

        //Récupération du container
        let container = document.querySelector('.header__navBar__list');

        //Ajout des éléments HTML
        container.innerHTML = html;
    }
}

renderPhotographersTags();
