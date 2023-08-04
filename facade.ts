import { SubsystemA } from "./subsystems/subSystemA";
import { SubsystemB } from "./subsystems/subSystemB";
import { SubsystemC } from "./subsystems/subSystemC";

class Facade {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;
  private subsystemC: SubsystemC;

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  public operationA() {
    return `SubsystemA: ${this.subsystemA.operationA1()} ${this.subsystemA.operationA2()}`;
  }

  public operationB() {
    return `SubsystemA: ${this.subsystemB.operationB1()} ${this.subsystemB.operationB2()}`;
  }
  public operationC() {
    return `SubsystemC: ${this.subsystemC.operationC1()} ${this.subsystemC.operationC2()}`;
  }
}

export function facade() {
  console.log("***** Implementation of the Facade pattern *****");
  const facade = new Facade();

  const operationA = facade.operationA();
  const operationB = facade.operationB();
  const operationC = facade.operationC();

  console.log(operationA);
  console.log(operationB);
  console.log(operationC);
  console.log("-----------------------------------------------------------");
}
