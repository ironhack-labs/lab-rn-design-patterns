export interface Observer {
  update(data: undefined): void;
}

export class Subject {
  private observers: Observer[] = [];

  // Agregamos nuestro metodo para el observer de la lista.
  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  // Agregamos metodo para remover el observer de la lista.
  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  // Agregamos nuestro metodo para hacer update del observer.
  public notifyObservers(data: any): void {
    for (const observer of this.observers) {
      observer.update(data);
    }
  }

  public someBusinessLogic(): void {
    console.log("Doing some business logic...");
    this.notifyObservers("Some data to be sent to observers.");
  }
}