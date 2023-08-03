class ProductFactory {
  public createProduct(type: 'A' | 'B'): Product {
    switch (type) {
      case 'A':
        return new ConcreteProductA()
      case 'B':
        return new ConcreteProductB()
      default:
        throw new Error(`Invalid product type: ${type}`)
    }
  }
}

export default ProductFactory
