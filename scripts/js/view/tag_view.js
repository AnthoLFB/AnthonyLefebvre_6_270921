//Gère les tag sur la page d'accueil
class TagView
{
    constructor(eventDispatcher, tag)
    {
        //Objet tag
        this.tag = tag;

        //Gère les events
        this.eventDispatcher = eventDispatcher;

        //Créer le lien avec le tag
        this.createTagLink();
    }

    //Créé le lien conternant le tag
    createTagLink()
    {
        // Création du lien
        this.element = document.createElement("a");

        // Ajout d'une classe
        this.element.classList.add("photographer_tag");

        // Création du nom du lien
        let htmlLinkName = document.createTextNode("#" + this.tag.name);

        // Ajout du texte
        this.element.appendChild(htmlLinkName);

        // Cible du lien (redirection)
        this.element.href = "#";

        //Création de l'event
        this.registerEvents();

        //Affichage
        this.render();
    }

    //Change l'aspect du tag en fonction de sa selection
    render() 
    {
        if(this.tag.selected)
        {
            this.element.classList.add("photographer_tag--selected");
        } 
        else
        {
            this.element.classList.remove("photographer_tag--selected");
        }
    }

    //Créé un event sur le tag concerné
    registerEvents()
    {
        this.element.addEventListener('click', this.select.bind(this));
    }

    //Modifie l'état du tag 
    select()
    {
        this.tag.selected = !this.tag.selected;
        this.render();
        this.eventDispatcher.dispatch('tagSelected', [])
    }
}
