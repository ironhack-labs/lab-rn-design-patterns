import { SubsystemA } from "./subsystems/subSystemA";
import { SubsystemB } from "./subsystems/subSystemB";
import { SubsystemC } from "./subsystems/subSystemC";

// clase Facade para implementaar el pratron Facade
class Facade {
  // Se instancian los subsistemas que seran utilizados 
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;
  private subsystemC: SubsystemC;

  // En el constructor se inicializan las instancias de los subsistemas
  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  // operar con el SubsistemaA
  public operationA(): string {
    const resultA1 = this.subsystemA.operationA1();
    const resultA2 = this.subsystemA.operationA2();

    return `${resultA1} ${resultA2}`;
  }

  //operar con el SubsistemaB
  public operationB(): string {

    const resultB1 = this.subsystemB.operationB1();
    const resultB2 = this.subsystemB.operationB2();

    return `${resultB1} ${resultB2}`;
  }

  // operar con el SubsistemaC
  public operationC(): string {

    const resultC1 = this.subsystemC.operationC1();
    const resultC2 = this.subsystemC.operationC2();

    return `${resultC1} ${resultC2}`;
  }
}


export default Facade;
