// TODO: Implement the ProductFactory class using the Factory pattern
import { ConcreteProductA, ConcreteProductB } from "./product";

class ProductFactory {
  // TODO: Implement the factory method that creates and returns Product instances
  createProduct(product: string): ConcreteProductA | ConcreteProductB {
    return product === "A" ? new ConcreteProductA() : new ConcreteProductB();
  }
}

export default ProductFactory;
