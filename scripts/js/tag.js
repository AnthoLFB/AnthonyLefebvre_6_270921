class Tag
{
    constructor(name)
    {
        this.name = name;
    }

    async getAllTags()
    {
        //Appel de la classe 
        let recoveredData = new dataRecovery("photographers.json");
        
        //Récupération des données du JSON
        recoveredData = await recoveredData.getData();

        //Déclaration des variables utiles
        let tagsArray = new Array();

       //Boucle sur les resultats de la requête
        recoveredData.photographers.forEach(photographer => {

            //Boucle sur les différents tableaux de tags par photographes
            photographer.tags.forEach(tag =>
            {

                let tagObject = new Tag(tag);
                let tagName = tagObject.name;

                // Vérification de l'existance d'un tag pour éviter les doublons
                if (tagsArray.indexOf(tagName) === -1) 
                {
                    //S'il n'existe pas, il est enregistré
                    tagsArray.push(tagName);
                }
            });
        });
        
        //Retourne le tableau avec les noms des tags
        return tagsArray;
    }

    //Ajoute les events sur les tags dans la barre de navigation
    addEventOnTags()
    {
        let tags = document.getElementsByClassName("header__navBar__list__item__link");

        Array.from(tags).forEach(function(tag) {
            tag.addEventListener('click', function(event){
                event.preventDefault();
                let filter = tag.textContent
                new HomeView().filteredPhotographersRender(filter);
             });
          });
    }


}