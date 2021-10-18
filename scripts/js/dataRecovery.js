class dataRecovery
{
    constructor(jsonFileName)
    {
        this.jsonFileName = jsonFileName;
    }

    getData()
    {
        //Création de la requête et récupération du résultat dans une variable
        let requestResult = 
            fetch("scripts/js/data/" + this.jsonFileName)
            .then(function(res) 
            {
                if (res.ok) 
                {
                    return res.json();
                }
            })
            .catch(function(err) {
                console.log("Une erreur est survenue : " + err);
            });

        //Renvoie du resultat
        return requestResult;
    }
}