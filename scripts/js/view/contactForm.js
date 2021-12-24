// eslint-disable-next-line no-unused-vars
class contactForm
{
    constructor(photographer)
    {
        this.photographer = photographer;
        
        this.openBtn = document.querySelector(".photographer__profil__contact__button").addEventListener("click", this.openModal);
        
        this.closeBtn = document.querySelector(".contact-form__content__header__close").addEventListener("click", this.closeModal);
        
        this.sendBtn = document.querySelector(".contact-form__content__field__btn").addEventListener("click", this.sendForm.bind(this));

        this.createForm();
    }

    createForm()
    {
        let container = document.querySelector(".contact-form__content__header__photographer-name");
        container.innerHTML = this.photographer.name;
    }


    openModal() 
    {
        const modal = document.getElementById("form");
        modal.style.display = "flex";
        document.body.classList.add("noScroll");
        
        //focus sur le formulaire lors de l'ouverture
        document.querySelector(".contact-form__content__field__input").focus();
    }
    
    closeModal() {
        const modal = document.getElementById("form");
        modal.style.display = "none";
        document.body.classList.remove("noScroll");
    }

    sendForm(e)
    {
        e.preventDefault();
        
        let firstname = document.getElementById("firstname").value;
        let lastname = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let string = "Vous avez un nouvel email de " + firstname + " " + lastname + ". Cet email est envoyé depuis l'adresse suivante : " + email + ". Voici le contenu du message :  " + message; 

        console.log(string);

        this.closeModal();
    }
    
}