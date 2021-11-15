class PhotographerPageView
{
    constructor(app)
    {
        this.app = app;
    }

    render()
    {
        //Fais appel à la classe pour afficher le photographe
        new PhotographerProfilView(this.app.photographer);
    }
}