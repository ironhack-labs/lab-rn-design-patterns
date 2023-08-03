import { SubsystemA, SubsystemB, SubsystemC } from "./subsystems";

class Facade {
  // TODO: Implement the Facade class using the Facade pattern

  private subsystemA = new SubsystemA();
  private subsystemB = new SubsystemB();
  private subsystemC = new SubsystemC();

  public operationA() {
    return `${this.subsystemA.operationA1()} ${this.subsystemA.operationA2()}`;
  }

  public operationB() {
    return `${this.subsystemB.operationB1()} ${this.subsystemB.operationB2()}`;
  }

  public operationC() {
    return `${this.subsystemC.operationC1()} ${this.subsystemC.operationC2()}`;
  }
}

export default Facade;
