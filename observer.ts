interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  public add(observer: Observer): void {
    this.observers.push(observer);
  }

  public delete(observer: Observer): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  public notify(data: any): void {
    this.observers.forEach((observer) => observer.update(data));
  }

  public someBusinessLogic(): void {
    console.log("Implementing business logic!");
    this.notify("Notify data!");
  }
}

export function observer() {
  console.log("***** Implementation of the Observer pattern *****");
  class ConcreteObserver implements Observer {
    public update(data: any): void {
      console.log(`Received update with data: ${data}`);
    }
  }

  const subject = new Subject();
  const observer1 = new ConcreteObserver();
  const observer2 = new ConcreteObserver();

  subject.add(observer1);
  subject.add(observer2);

  subject.someBusinessLogic();

  subject.delete(observer1);

  subject.someBusinessLogic();
  console.log("-----------------------------------------------------------");
}
