/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

class HomeView
{
    constructor(app)
    {
        this.app = app;

        this.createTagList();

        this.app.eventDispatcher.addEventListener('tagSelected', this.render.bind(this));
    }

    createTagList() {
        //Récupération du container
        let container = document.querySelector('.header__navBar__list');

        // Boucle sur un tableau d'objet Tag
        this.app.tags.forEach(tag =>
        {
            // Création du li contenant le lien
            let listItem = document.createElement("li");

            // Ajout d'une classe
            listItem.classList.add("header__navBar__list__item");

            // Ajout de l'item à la liste
            container.appendChild(listItem);

            // Création d'un lien via la class TagView
            let tagLink = new TagView(this.app.eventDispatcher, tag);

            listItem.appendChild(tagLink.element);
        });
    }

    render()
    {
        //récupère les tags qui sont selectionnés
        let selectedTags = this.app.tags.filter((tag) => tag.selected);        

        // Si aucun tag n'est selectionné, alors on garde tous les tags, sinon on ne garde que ceux selectionnés
        selectedTags = selectedTags.length === 0 ? this.app.tags : selectedTags;

        //Vérification de la présence d'un tag selectionné dans le tableau de tag d'un photographe
        const photographers = this.app.photographers.filter((photographer) => selectedTags.filter((tag) => photographer.tags.includes(tag)).length > 0);

        new PhotographerView(this.app.eventDispatcher, photographers);
    }
}

