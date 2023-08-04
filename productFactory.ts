import { ConcreteProductA, ConcreteProductB } from "./product";

class ProductFactory {
  public createProduct(productType: string) {
    switch (productType) {
      case "A":
        return new ConcreteProductA();
      case "B":
        return new ConcreteProductB();
      default:
        throw new Error(`Product: ${productType} is not supported yet.`);
    }
  }
}

export function factory() {
  console.log("***** Implementation of the Singleton pattern *****");
  const factory = new ProductFactory();

  const productA = factory.createProduct("A");
  const productB = factory.createProduct("B");

  console.log(productA.operation());
  console.log(productB.operation());
  console.log("-----------------------------------------------------------");
}
