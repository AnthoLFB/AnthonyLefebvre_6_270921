// Cette classe permet de récupérer des données via un fichier JSON donné
// eslint-disable-next-line no-unused-vars
class DataRepository
{
    constructor(jsonFileName)
    {
        this.jsonFileName = jsonFileName;
    }

    //Retourne une promesse avec les données au format JSON
    getData()
    {
        return fetch("scripts/js/data/" + this.jsonFileName)
            .then((res) => res.json())
            .catch((err) => console.log("Une erreur est survenue : " + err));
    }
}