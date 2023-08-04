import { SubsystemA } from "./subsystems/subSystemA";
import { SubsystemB } from "./subsystems/subSystemB";
import { SubsystemC } from "./subsystems/subSystemC";

class Facade {
  // TODO: Implement the Facade class using the Facade pattern
  public subsystemA: SubsystemA;
  public subsystemB: SubsystemB;
  public subsystemC: SubsystemC;

  constructor(){
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  public operationA (): string {
    const operationA1 = this.subsystemA.operationA1();
    const operationA2 = this.subsystemA.operationA2();
    return `${operationA1} ${operationA2}`;
  }
  public operationB () {
    const operationB1 = this.subsystemB.operationB1();
    const operationB2 = this.subsystemB.operationB2();
    return `${operationB1} ${operationB2}`;
  }
  public operationC () {
    const operationC1 = this.subsystemC.operationC1();
    const operationC2 = this.subsystemC.operationC2();
    return `${operationC1} ${operationC2}`;
  }
}

export default Facade;

const facade = new Facade();

const resultA = facade.operationA();
const resultB = facade.operationB();
const resultC = facade.operationC();

console.log(resultA); // Output: "SubsystemA: operation A1. SubsystemA: operation A2."
console.log(resultB); // Output: "SubsystemB: operation B1. SubsystemB: operation B2."
console.log(resultC); // Output: "SubsystemC: operation C1. SubsystemC: operation C2."