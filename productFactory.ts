import { Product, ConcreteProductA, ConcreteProductB } from './product';

class ProductFactory {
  createProduct(type: string): Product {
    if (type === 'A') {
      return new ConcreteProductA();
    } else if (type === 'B') {
      return new ConcreteProductB();
    } else {
      throw new Error(`Invalid product type: ${type}`);
    }
  }
}

export default ProductFactory;
