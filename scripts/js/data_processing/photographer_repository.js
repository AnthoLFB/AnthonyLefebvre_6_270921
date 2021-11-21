class PhotographerRepository extends DataRepository 
{
    findAll() 
    {
        //Permet de récupérer tous les photographes et de les retourner dans un tableau "photographers" sous forme d'objet photographe.
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
  