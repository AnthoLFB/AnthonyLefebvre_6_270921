class TagView
{
    constructor(eventDispatcher, tag)
    {
        this.tag = tag;
        this.eventDispatcher = eventDispatcher;
        this.createTagLink();
    }

    //Créé le lien conternant le tag
    createTagLink()
    {
        // Création du lien
        this.element = document.createElement("a");

        // Ajout d'une classe
        this.element.classList.add("photographer-tag");

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
            this.element.style.background = "yellow";
        } 
        else
        {
            this.element.style.background = "red";
        }
    }

    //Créé un event sur le tag concerné
    registerEvents()
    {
        this.element.addEventListener('click', this.select.bind(this));
    }

    //Modifie le tag 
    select()
    {
        this.tag.selected = !this.tag.selected;
        this.render();
        this.eventDispatcher.dispatch('tagSelected', [])
    }
}
