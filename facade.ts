import { SubsystemA, SubsystemB, SubsystemC } from './subsystems'

class Facade {
  private subsystemA: SubsystemA
  private subsystemB: SubsystemB
  private subsystemC: SubsystemC

  constructor() {
    this.subsystemA = new SubsystemA()
    this.subsystemB = new SubsystemB()
    this.subsystemC = new SubsystemC()
  }

  public operationA(): string {
    return `${this.subsystemA.operationA1} ${this.subsystemA.operationA2}`
  }

  public operationB(): string {
    return `${this.subsystemB.operationB1} ${this.subsystemB.operationB2}`
  }

  public operationC(): string {
    return `${this.subsystemC.operationC1} ${this.subsystemC.operationC2}`
  }
}

export default Facade
