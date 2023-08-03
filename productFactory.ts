//Hacemos las importaciones necesarias
import { Product, ConcreteProductA, ConcreteProductB } from './product';

//Nuestro Factory
export class ProductFactory {
  public createProduct(productType: string): Product {
    switch (productType) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();
      default:
        throw new Error(`Product type invalid: ${productType}`);
    }
  }
}