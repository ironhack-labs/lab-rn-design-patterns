// TODO: Implement the ProductFactory class using the Factory pattern

import { ConcreteProductA, ConcreteProductB } from "./product";

class ProductFactory {
  // TODO: Implement the factory method that creates and returns Product instances
  createProduct(type: "A" | "B"){
    if(type === "A"){
      return new ConcreteProductA();
    }
    return new ConcreteProductB();
  }
}

export default ProductFactory;