interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    // TODO: Implement this method to add an observer to the list
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    // TODO: Implement this method to remove an observer from the list
    this.observers = this.observers.filter(ob => ob !== observer);
  }

  public notifyObservers(data: any): void {
    // TODO: Implement this method to notify all observers
    for(let i = 0; i < this.observers.length; i++){
      this.observers[i].update(data);
    }
  }

  public someBusinessLogic(): void {
    console.log("Doing some business logic...");
    this.notifyObservers("Some data to be sent to observers.");
  }
}