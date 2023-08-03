import {Logger} from './logger'; //Hacemos el export sin default para comodidad.
import {ProductFactory} from './productFactory'; //Hacemos el export sin default para comodidad.
import {Facade} from './facade'; //Hacemos el export sin default para comodidad.
import { Subject, Observer } from './observer'; //Hacemos el export sin default para comodidad y agregamos la interfaz que faltaba asi como el Subject.

//Iteration 1
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Message 1 from logger1");
logger2.log("Message 1 from logger2");
logger1.log("Message 2 from logger1");

logger1.printLogs();
//
console.log('');//Separacion de resultados
//
logger2.printLogs();

//
console.log('');//Separacion de resultados
//

// Iteration 2:
const factory = new ProductFactory();

const productA = factory.createProduct('A');
const productB = factory.createProduct('B');

console.log(productA.operation()); // Output: "Result of ConcreteProductA."
console.log(productB.operation()); // Output: "Result of ConcreteProductB."

//
console.log('');//Separacion de resultados
//

// Iteration 3:


const facade = new Facade();

const resultA = facade.operationA();
const resultB = facade.operationB();
const resultC = facade.operationC();

console.log(resultA); // Output: "SubsystemA: operation A1. SubsystemA: operation A2."
console.log(resultB); // Output: "SubsystemB: operation B1. SubsystemB: operation B2."
console.log(resultC); // Output: "SubsystemC: operation C1. SubsystemC: operation C2."

//
console.log('');//Separacion de resultados
//

// Iteration 4: 
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

//
console.log('');//Separacion de resultados
//

subject.someBusinessLogic();
// Output:
// Doing some business logic...
// Received update with data: Some data to be sent to observers.