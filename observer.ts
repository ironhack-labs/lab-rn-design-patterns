export interface Observer {
  update(data: any): void;
}

export class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if(isExist) {
      return console.log('Observer exist');
    }

    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const observerToDelete = this.observers.indexOf(observer);
    if(observerToDelete === -1) {
      return console.log('Observer doesnt exists')
    }

    this.observers.splice(observerToDelete, 1);
  }

  public notifyObservers(data: any): void {
    if(this.observers.length === 0) {
      return console.log('No observers')
    }

    this.observers.forEach(observer => observer.update(data));
  }

  public someBusinessLogic(): void {
    console.log("Doing some business logic...");
    this.notifyObservers("Some data to be sent to observers.");
  }
}