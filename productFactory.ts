// TODO: Implement the ProductFactory class using the Factory pattern
import { ConcreteProductA, ConcreteProductB, Product } from "./product";

class ProductFactory {
  // TODO: Implement the factory method that creates and returns Product instances
  public createProduct(productType: "A" | "B"): Product {
    if (productType === "A") {
      return new ConcreteProductA();
    } else if (productType === "B") {
      return new ConcreteProductB();
    } else {
      throw new Error("Invalid product type.");
    }
  }
}

export default ProductFactory;
