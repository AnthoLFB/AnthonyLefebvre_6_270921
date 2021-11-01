class App
{
    constructor()
    {
        this.tags = [];
        this.photographers = [];
    }

    async init()
    {
        this.tags = await Tag.getAllTags();
        this.photographers = await Photographer.getPhotographers();

        new HomeView(this.tags).renderTags();
    }
}

App.init();