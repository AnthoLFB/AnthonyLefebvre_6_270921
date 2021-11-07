class Event 
{
  constructor(name) 
  {
    this.name = name;
    this.callbacks = [];
  }

  attach(callback) 
  {
    this.callbacks.push(callback);
  }
}
