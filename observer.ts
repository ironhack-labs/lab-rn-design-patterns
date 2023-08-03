export interface Observer {
  update(data: any): void;
}

export class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observers.push(observer)
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer)
    if (index > -1)
      this.observers.splice(index, 1)
  }

  public notifyObservers(data: any): void {
    this.observers.map((observer) => observer.update(data))
  }

  public someBusinessLogic(): void {
    console.log("Doing some business logic...");
    this.notifyObservers("Some data to be sent to observers.");
  }
}