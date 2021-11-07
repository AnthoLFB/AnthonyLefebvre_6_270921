
class EventDispatcher 
{
  constructor() 
  {
    this.events = {};
  }

  register(eventName) 
  {
    this.events[eventName] = new Event(eventName);
  }

  dispatch(eventName, eventArgs) 
  {
    this.events[eventName].callbacks.forEach((callback) => callback(eventArgs));
  }

  addEventListener(eventName, callback) 
  {
    this.events[eventName].attach(callback);
  }
}
