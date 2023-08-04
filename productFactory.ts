// TODO: Implement the ProductFactory class using the Factory pattern
import { Product, ConcreteProductA, ConcreteProductB } from "./product";

class ProductFactory {
  // TODO: Implement the factory method that creates and returns Product instances
  public createProduct(type: string): Product {
    switch(type) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();
      default: 
      throw new Error(`Invalid product type ${type}`);
    }
  }
}

export default ProductFactory;

/**
 * createProduct that takes a type parameter indicating the type of product to create
 * Based on the provided type the method created and returns a new instance of the specified product type(ConcreteProductA or ConcreteProductB)
 * If the provided type is not recognized we throw an error to indicate an invalid product type
 */