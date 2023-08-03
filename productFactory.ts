// TODO: Implement the ProductFactory class using the Factory pattern
import { Product, ConcreteProductA, ConcreteProductB } from "./product";

class ProductFactory {
  // TODO: Implement the factory method that creates and returns Product instances
  public createProduct(productType: string): Product {
    switch (productType) {
      case "A":
        return new ConcreteProductA();
      case "B":
        return new ConcreteProductB();
      default:
        throw new Error(`Invalid product type: ${productType}`);
    }
  }
}

export default ProductFactory;
