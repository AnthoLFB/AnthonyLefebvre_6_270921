class App
{
    constructor()
    {
        this.tags = [];
        this.photographers = [];
        this.view = null;
        this.eventDispatcher = new EventDispatcher();
        this.eventDispatcher.register('tagSelected');
    }

    init()
    {
        const photographerRepository = new PhotographerRepository('photographers.json');

        photographerRepository.findAll()
          .then((photographers) => {
              this.photographers = photographers;
              this.photographers.forEach((photographer) => {
                  let tags = [];
                  photographer.tags.forEach((tagName) => {
                      let tag = this.tags.find((tag) => tag.name === tagName);

                      if (typeof tag === "undefined") {
                          tag = new Tag(tagName);
                          this.tags.push(tag);
                      }

                      tags.push(tag);
                  });
                  photographer.tags = tags;
              });
          })
          .then(() => {
              // test si l'url est la page d'accueil alors on appelle HomeView sinon on appellera PhotographerView
              this.view = new HomeView(this);
          })
          .then(() => {
              this.view.render();
          });

    }
}

(new App()).init();