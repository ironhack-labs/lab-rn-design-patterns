//Importamos nuestros sistemas necesarios.
import SubsystemA from './subsystems/subSystemA';
import SubsystemB from './subsystems/subSystemB';
import SubsystemC from './subsystems/subSystemC';

// Implementación del Facade
export class Facade {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;
  private subsystemC: SubsystemC;

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  // Nuestros metodos que encapsulan los resultados

  public operationA(): string {
    const resultA1 = this.subsystemA.operationA1();
    const resultA2 = this.subsystemA.operationA2();
    return `${resultA1} ${resultA2}`;
  }

  public operationB(): string {
    const resultB1 = this.subsystemB.operationB1();
    const resultB2 = this.subsystemB.operationB2();
    return `${resultB1} ${resultB2}`;
  }

  public operationC(): string {
    const resultC1 = this.subsystemC.operationC1();
    const resultC2 = this.subsystemC.operationC2();
    return `${resultC1} ${resultC2}`;
  }
}