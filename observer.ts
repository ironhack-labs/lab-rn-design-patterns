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
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(data: any): void {
    // TODO: Implement this method to notify all observers
    this.observers.map(observer => observer.update(data));
  }

  public someBusinessLogic(): void {
    console.log("Doing some business logic...");
    this.notifyObservers("Some data to be sent to observers.");
  }
}

class ConcreteObserver implements Observer {
  public update(data: any): void {
    console.log(`Received update with data: ${data}`);
  }
}

const subject = new Subject();

const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.someBusinessLogic();
// Output:
// Doing some business logic...
// Received update with data: Some data to be sent to observers.
// Received update with data: Some data to be sent to observers.

subject.removeObserver(observer1);

subject.someBusinessLogic();
// Output:
// Doing some business logic...
// Received update with data: Some data to be sent to observers.