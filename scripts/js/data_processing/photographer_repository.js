//Cette classe permet de récupérer les différents photographes
class PhotographerRepository extends DataRepository 
{
    findAll() 
    {
        //Retourne une promesse avec des objets photographe dans un tableau "photographers".
        return this.getData()
            .then((data) => data.photographers.map((photographer) => new Photographer(
                photographer.name,
                photographer.id,
                photographer.city,
                photographer.country,
                photographer.tags,
                photographer.tagline,
                photographer.price, 
                photographer.portrait
            )));
    }
}
  