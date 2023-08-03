import { SubsystemA, SubsystemB, SubsystemC } from './subsystems'

class Facade {
  protected subsystemA: SubsystemA
  protected subsystemB: SubsystemB
  protected subsystemC: SubsystemC

  constructor (
    subsystemA?: SubsystemA,
    subsystemB?: SubsystemB,
    subsystemC?: SubsystemC
  ) {
    this.subsystemA = subsystemA ?? new SubsystemA()
    this.subsystemB = subsystemB ?? new SubsystemB()
    this.subsystemC = subsystemC ?? new SubsystemC()
  }

  public operationA (): string {
    let result = ''

    result += this.subsystemA.operationA1()
    result += ` ${this.subsystemA.operationA2()}`

    return result
  }

  public operationB (): string {
    let result = ''

    result += this.subsystemB.operationB1()
    result += ` ${this.subsystemB.operationB2()}`

    return result
  }

  public operationC (): string {
    let result = ''

    result += this.subsystemC.operationC1()
    result += ` ${this.subsystemC.operationC2()}`

    return result
  }
}

export default Facade
