export interface Observer {
  update(data: any): void
}

export class Subject {
  private observers: Observer[] = []

  public addObserver (observer: Observer): void {
    if (this.observers.includes(observer)) {
      console.log('The observer already exists')
      return
    }

    this.observers.push(observer)
  }

  public removeObserver (observer: Observer): void {
    if (!this.observers.includes(observer)) {
      console.log("The observer doesn't exists")
      return
    }

    this.observers.splice(this.observers.indexOf(observer), 1)
  }

  public notifyObservers (data: any): void {
    for (const observer of this.observers) {
      observer.update(data)
    }
  }

  public someBusinessLogic (): void {
    console.log('Doing some business logic...')
    this.notifyObservers('Some data to be sent to observers.')
  }
}
