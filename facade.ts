import { SubsystemA } from "./subsystems/subSystemA";
import { SubsystemB } from "./subsystems/subSystemB";
import { SubsystemC } from "./subsystems/subSystemC";


class Facade {
  // TODO: Implement the Facade class using the Facade pattern
  subSystemA : SubsystemA
  subSystemB : SubsystemB
  subSystemC : SubsystemC

  constructor(){
    this.subSystemA = new SubsystemA();
    this.subSystemB = new SubsystemB();
    this.subSystemC = new SubsystemC();
  }

  operationA(): void {
    this.subSystemA.operationA1()
    this.subSystemA.operationA2()
  }

  operationB(): void {
    this.subSystemB.operationB1()
    this.subSystemB.operationB2()
  }

  operationC(): void {
    this.subSystemC.operationC1()
    this.subSystemC.operationC2()
  }
}

export default Facade;