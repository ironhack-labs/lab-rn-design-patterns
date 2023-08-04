// TODO: Implement the ProductFactory class using the Factory pattern

import { ConcreteProductA, ConcreteProductB, Product } from "./product";

class ProductFactory {
  // TODO: Implement the factory method that creates and returns Product instances
  createProduct(value: string): any {
    switch (value) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();
      default:
        throw new Error('Ocurió un error al fabricar el producto.');
        
    }
  }
}

export default ProductFactory;

const factory = new ProductFactory();

const productA = factory.createProduct('A');
const productB = factory.createProduct('B');

console.log(productA.operation()); // Output: "Result of ConcreteProductA."
console.log(productB.operation()); // Output: "Result of ConcreteProductB."