class Photographer
{
    constructor(name, id, city, country, tags, tagline, price, portrait)
    {
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait
    }

    static async getPhotographers()
    {
        //Appel de la classe 
        let recoveredData = new dataRecovery("photographers.json");
            
        //Récupération des données du JSON
        recoveredData = await recoveredData.getData();

        //Déclaration des variables utiles
        let photographersArray = new Array();

        //Boucle sur les resultats de la requête
        recoveredData.photographers.forEach(photographer => {

            //Création d'un objet photographe
            let photographerObject = new Photographer(photographer.name, photographer.id, photographer.city, photographer.country, photographer.tags, photographer.tagline ,photographer.price, photographer.portrait);

            //Stockage dans un tableau
            photographersArray.push(photographerObject);
        });

        return photographersArray;
    }
}

















/*class Photographer
{
    constructor(name, id, city, country, tags, tagline, price, portrait)
    {
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait
    }

    async getPhotographers(filter = "all")
    {
        //Appel de la classe 
        let recoveredData = new dataRecovery("photographers.json");
            
        //Récupération des données du JSON
        recoveredData = await recoveredData.getData();

        //Déclaration des variables utiles
        let photographersArray = new Array();

        if(filter == "all")
        {
            //Boucle sur les resultats de la requête
            recoveredData.photographers.forEach(photographer => {

                //Création d'un objet photographe
                let photographerObject = new Photographer(photographer.name, photographer.id, photographer.city, photographer.country, photographer.tags, photographer.tagline ,photographer.price, photographer.portrait);

                //Stockage dans un tableau
                photographersArray.push(photographerObject);
            });

            return photographersArray;
        }
        else
        {
            //Boucle sur les resultats de la requête
            recoveredData.photographers.forEach(photographer => {

                photographer.tags.forEach(tag =>
                {
                    if(tag == filter)
                    {
                        //Création d'un objet photographe
                        let photographerObject = new Photographer(photographer.name, photographer.id, photographer.city, photographer.country, photographer.tags, photographer.tagline ,photographer.price, photographer.portrait);

                        //Stockage dans un tableau
                        photographersArray.push(photographerObject);
                    }
                });
            });

            return photographersArray;
        }
    }
}
*/