// TODO: Implement the ProductFactory class using the Factory pattern

class ProductFactory {
  public createProduct(type: string): Product {
    switch(type) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();

      default:
        throw new Error('Invalid product type');
    }
  }
}

export default ProductFactory;