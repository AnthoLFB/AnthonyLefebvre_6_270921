class Lightbox
{

    constructor(url, gallery)
    {
        this.domElement = this.buildDomElement(url);
        this.gallery = gallery; // Chemin des images 
        this.loaderImg(url); 
        this.controlWithKeyboard = this.controlWithKeyboard.bind(this);
        document.body.appendChild(this.domElement);
        document.addEventListener("keyup", this.controlWithKeyboard);
    }

    static init()
    {
        const links = Array.from(document.querySelectorAll(".photographer__media__card__link"));
        
        const gallery = links.map(link => link.getAttribute("href"));

        links.forEach(link =>
            {
                link.addEventListener("click", e =>{
                    e.preventDefault();
                    console.log(e.currentTarget.getAttribute("href"));
                    console.log(new Lightbox(e.currentTarget.getAttribute("href"), gallery));
                })
            })
    }

    loaderImg(url)
    {
        this.url = null;

        const image = new Image();

        const container = this.domElement.querySelector(".lightbox__container")
        const loader = document.createElement("div");
        loader.classList.add("lightbox__container__loader");
        container.innerHTML = "";
        container.appendChild(loader);

        console.log(image);

        image.onload = () =>{
           container.removeChild(loader);
           container.appendChild(image);
           this.url = url;
        }

        image.src = url;
        image.alt = "Représentation d'une forêt";
    }

    controlWithKeyboard(e)
    {
        if(e.key == "Escape")
        {
            this.close(e);
        }
        else if(e.key == "ArrowLeft")
        {
            this.prev(e)
        }
        else if(e.key == "ArrowRight")
        {
            this.next(e)
        }
    }

    close(e)
    {
        e.preventDefault();
        this.domElement.classList.add("fadeOut");

        window.setTimeout(() => {
            this.domElement.parentElement.removeChild(this.domElement);
        }, 500);

        document.removeEventListener("keyup", this.controlWithKeyboard)
    }

    next(e)
    {
        e.preventDefault();
        
        let currentPosition = this.gallery.findIndex(image => image == this.url);

        if(currentPosition == this.gallery.length -1)
        {
            currentPosition = -1;
        }

        this.loaderImg(this.gallery[currentPosition + 1]);

    }

    prev(e)
    {
        let currentPosition = this.gallery.findIndex(image => image == this.url);

        if(currentPosition == 0)
        {
            currentPosition = this.gallery.length;
        }
        
        this.loaderImg(this.gallery[currentPosition - 1]);
    }

    buildDomElement(url)
    {
        const section = document.createElement("section");
        section.classList.add("lightbox");
        section.innerHTML = 
            `
                <!-- Contrôles -->
                <button aria-label="Fermer" class="lightbox__close"></button>
                <button aria-label="Suivant" class="lightbox__next"></button>
                <button aria-label="Précédent" class="lightbox__prev"></button>

                <!-- Image -->
                <div class="lightbox__container"></div>
            `;
        
        section.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
        section.querySelector(".lightbox__next").addEventListener("click", this.next.bind(this));
        section.querySelector(".lightbox__prev").addEventListener("click", this.prev.bind(this));


        return section
    }
}