import { ConcreteProductA, ConcreteProductB, Product } from './product'

type ProductT = 'A' | 'B'

abstract class ProductFactoryCreator {
  abstract createProduct(type: ProductT): Product
}

class ProductFactory extends ProductFactoryCreator {
  createProduct (type: ProductT) {
    if (type === 'A') {
      return new ConcreteProductA()
    }

    return new ConcreteProductB()
  }
}

export default ProductFactory
