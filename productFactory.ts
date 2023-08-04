// Patron factory
import { Product, ConcreteProductA, ConcreteProductB } from './product';

// Se define la clase ProductFactory que implementa el patron Factory
class ProductFactory {
  // createProduct recibe el tipo de producto que se desea crear y devuelve una instancia del producto basado en el tipo recibido.
  public createProduct(productType: string): Product {
    switch (productType) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();
      // Si el tipo de producto no coincide con 'A' ni 'B', se lanza un error indicando que el tipo es invalido
      default:
        throw new Error(`Invalid product type: ${productType}`);
    }
  }
}

export default ProductFactory;
