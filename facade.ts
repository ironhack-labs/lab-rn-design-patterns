import { SubsystemA } from './subsystems/subSystemA';
import { SubsystemB } from './subsystems/subSystemB';
import { SubsystemC } from './subsystems/subSystemC';

class Facade {

  private subSystemA = new SubsystemA()
  private subSystemB = new SubsystemB()
  private subSystemC = new SubsystemC()

  operationA() {
    return `${this.subSystemA.operationA1()} ${this.subSystemA.operationA2()}`
  }
  operationB() {
    return `${this.subSystemB.operationB1()} ${this.subSystemB.operationB2()}`
  }
  operationC() {
    return `${this.subSystemC.operationC1()} ${this.subSystemC.operationC2()}`
  }
}

export default Facade;