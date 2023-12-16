import { Product } from './product'

export interface ProductsFetchResponse {
  data : {
    allProducts: Product[]
  }
}

export interface ProductFetchResponse {
  data : {
    Product: Product
  }
}
