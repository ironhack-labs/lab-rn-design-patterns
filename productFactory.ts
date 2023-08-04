// TODO: Implement the ProductFactory class using the Factory pattern

import { ConcreteProductA, ConcreteProductB, Product } from "./product";

class ProductFactory {
  // TODO: Implement the factory method that creates and returns Product instances
  createProduct(name : "A" | "B") : Product {
    if(name === "A"){
      return new ConcreteProductA()
    }
    return new ConcreteProductB()
  }
}

export default ProductFactory;