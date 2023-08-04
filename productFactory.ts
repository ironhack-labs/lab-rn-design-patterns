import { Product, ConcreteProductA, ConcreteProductB } from './product';

class ProductFactory {
  public createProduct(productType: string): Product {
    switch (productType) {
      case "A":
        return new ConcreteProductA();
      case "B":
        return new ConcreteProductB();
      default:
        throw new Error('Invalid product type');
    }

  }
}

export default ProductFactory;