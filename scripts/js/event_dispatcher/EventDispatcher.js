//Permet de gérer les event
class EventDispatcher 
{
  constructor() 
  {
    this.events = {};
  }

  //Permet d'enregistrer & créer l'event
  register(eventName) 
  {
    this.events[eventName] = new Event(eventName);
  }

  //Permet d'appeler les fonctions de callback
  dispatch(eventName, eventArgs) 
  {
    this.events[eventName].callbacks.forEach((callback) => callback(eventArgs));
  }

  //Permet d'ajouter un listener sur un event donné
  addEventListener(eventName, callback) 
  {
    this.events[eventName].attach(callback);
  }
}
