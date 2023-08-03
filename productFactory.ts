// TODO: Implement the ProductFactory class using the Factory pattern

import { ConcreteProductA, ConcreteProductB } from "./product";

class ProductFactory {


  createProduct(productType: string) {
    if (productType == "A") return new ConcreteProductA()
    if (productType == "B") return new ConcreteProductB()
    throw Error(`Not a compatible product type ${productType}`)
  }
}

export default ProductFactory;