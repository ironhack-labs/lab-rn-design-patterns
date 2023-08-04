export interface Observer {
  update(data: any): void;
}

export class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
   this.observers.push(observer)
  }

  public removeObserver(observer: Observer): void {
    // TODO: Implement this method to remove an observer from the list
    this.observers = this.observers.filter((item) => item !== observer)
  }

  public notifyObservers(data: any): void {
    // TODO: Implement this method to notify all observers
    this.observers.forEach((item) => item.update(data))
  }

  public someBusinessLogic(): void {
    console.log("Doing some business logic...");
    this.notifyObservers("Some data to be sent to observers.");
  }
}