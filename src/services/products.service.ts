import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './../entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 122,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'bla bla 2',
      price: 433,
      image: '',
      stock: 9,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`The product with the id: #${id} not found`);
    }
    return product;
  }
}
