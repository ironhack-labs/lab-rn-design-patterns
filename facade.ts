import { SubsystemA, SubsystemB, SubsystemC } from './subsystems';

class Facade {
  // TODO: Implement the Facade class using the Facade pattern
  subSystemA: SubsystemA;
  subSystemB: SubsystemB;
  subSystemC: SubsystemC;
  constructor(){
    this.subSystemA = new SubsystemA();
    this.subSystemB = new SubsystemB();
    this.subSystemC = new SubsystemC();
  }

  operationA(){
    return `${this.subSystemA.operationA1()} ${this.subSystemA.operationA2()}`
  };

  operationB(){
    return `${this.subSystemB.operationB1()} ${this.subSystemB.operationB2()}`
  }

  operationC(){
    return `${this.subSystemC.operationC1()} ${this.subSystemC.operationC2()}`
  }
}

export default Facade;