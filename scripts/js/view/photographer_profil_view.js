class PhotographerProfilView
{
    constructor(photographer)
    {
        this.photographer = photographer;
        this.removeElementsByClass("photographer__profil__identity");
        this.removeElementsByClass("photographer__profil__identity__photo");
        this.createElement();
    }

    createElement()
    {        
        //Récupération du container
        let container = document.querySelector('.photographer__profil');

        /* ---- Création de la div contenant l'identité du photographe ---- */

        //Création de la div
        let div = document.createElement("div");

        //Ajout d'une classe
        div.classList.add("photographer__profil__identity");

        //Récupération du bouton contact
        let divContact = document.getElementsByClassName("photographer__profil__contact");

        // Ajout de la div
        container.insertBefore(div, divContact[0]);

        let htmlSegment = 
            `
                <h1 class="photographer__profil__identity__name">${this.photographer.name}</h1>
                <p class="photographer__profil__identity__localisation">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="photographer__profil__identity__catchphrase">${this.photographer.tagline}</p>  
            `;

        div.innerHTML = htmlSegment;

        htmlSegment="";

        /* ---- Création de la div contenant la photo du photographe ---- */

        //Création de la div
        let divPhoto = document.createElement("div");

        //Ajout d'une classe
        divPhoto.classList.add("photographer__profil__identity__photo");

        container.appendChild(divPhoto);

        let HtmlSegment = 
            `
                <img src="images/photographers/photographersProfilPicture/${this.photographer.portrait}" alt="Photo de profil pour le photographe :  ${this.photographer.name}"/>
            `;

        divPhoto.innerHTML = HtmlSegment;
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