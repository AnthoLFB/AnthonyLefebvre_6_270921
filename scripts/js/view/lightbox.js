/* eslint-disable no-unused-vars */
class Lightbox
{

    constructor(url, gallery, imagesName)
    {
        this.domElement = this.buildDomElement(url);
        this.gallery = gallery; // Chemin des images 
        this.imagesName = imagesName; // titres des images
        this.loaderImg(url); 
        this.controlWithKeyboard = this.controlWithKeyboard.bind(this);
        document.body.appendChild(this.domElement);

        //focus sur la lightbox pour la navigation au clavier
        this.domElement.querySelector(".lightbox__next").focus();

        document.addEventListener("keyup", this.controlWithKeyboard);
    }

    loaderImg(url)
    {
        //Permet de découper le lien afin de tester si c'est une image ou une vidéo
        let mediaIdentification = url.split("/");     

        //Récupère le nom du fichier et son extension
        let mediaName = mediaIdentification[mediaIdentification.length - 1];

        this.url = null;

        let currentPosition = null;

        //Référence au container ou le média sera affiché dans la lightbox
        const container = this.domElement.querySelector(".lightbox__media__container__image-keeper")

        //Création d'un loader qui sera affiché pendant le chargement de l'image
        const loader = document.createElement("div");
        loader.classList.add("lightbox__media__container__image-keeper__loader");
        container.innerHTML = "";
        container.appendChild(loader);

        //Si c'est une vidéo on créé les balises necessaires et on affiche le média
        if(mediaName.includes(".mp4"))
        {
            const video = document.createElement("video");
            const source = document.createElement("source");
            video.appendChild(source);

            video.onloadstart = () => {
                container.removeChild(loader);
                container.appendChild(video);
                this.url = url;
                
                //Affichage du nom
                currentPosition = this.gallery.findIndex(image => image == this.url);
                video.setAttribute("aria-label",this.imagesName[currentPosition]);
                this.displayMediaName(currentPosition);
            }

            video.controls = true;
            video.autoplay = false;
            source.setAttribute('src', url);
            source.setAttribute('type', 'video/mp4');
        }
        //Si c'est une image alors on créé les balises associées et on affiche le média
        else
        {
            const image = new Image();

            image.onload = () => {
                container.removeChild(loader);
                container.appendChild(image);
                this.url = url;

                //Affichage du nom
                currentPosition = this.gallery.findIndex(image => image == this.url);
                image.alt = this.imagesName[currentPosition];
                this.displayMediaName(currentPosition);
            }

            image.src = url;
        }
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
        e.preventDefault();
        
        let currentPosition = this.gallery.findIndex(image => image == this.url);

        if(currentPosition == 0)
        {
            currentPosition = this.gallery.length;
        }
        
        this.loaderImg(this.gallery[currentPosition - 1]);
    }

    buildDomElement()
    {
        const section = document.createElement("section");
        section.classList.add("lightbox");
        section.setAttribute("aria-label", "Vue rapprochée de la photo.");
        section.innerHTML = 
            `
                <!-- Contrôles -->
                <button aria-label="Suivant" class="lightbox__next"></button>
                <button aria-label="Précédent" class="lightbox__prev"></button>
                <button aria-label="Fermer" class="lightbox__close"></button>

                <div class="lightbox__media__container">
                    <!-- Image -->
                    <div class="lightbox__media__container__image-keeper"></div>
                    <!-- titre -->
                    <p class="lightbox__media__container__image-title"></p>
                </div>
            `;
        
            section.querySelector(".lightbox__next").addEventListener("click", this.next.bind(this));
            section.querySelector(".lightbox__prev").addEventListener("click", this.prev.bind(this));
            section.querySelector(".lightbox__close").addEventListener("click", this.close.bind(this));
        
        return section
    }

    //Affiche le nom de l'image en bas de la lightbox
    displayMediaName(currentPosition)
    {
        let titleContainer = document.querySelector(".lightbox__media__container__image-title");
        titleContainer.innerHTML = this.imagesName[currentPosition];
    }
}