/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */

//Permet de créer un objet Event
class Event 
{
  constructor(name) 
  {
    this.name = name;
    this.callbacks = [];
  }

  //Ajout le callback de cet event dans un tableau
  attach(callback) 
  {
    this.callbacks.push(callback);
  }
}
