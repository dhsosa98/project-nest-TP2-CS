import { ProductsService } from './products.service';

describe('ProductService', () => {
  let ProductService: ProductsService;

  beforeEach(() => {
    ProductService = new ProductsService();
  });

  it('return array Products', () => {
    expect(ProductService.findAll()).toStrictEqual([
      {
        description: 'bla bla',
        id: 1,
        image: '',
        name: 'Product 1',
        price: 122,
        stock: 12,
      },
      {
        description: 'bla bla 2',
        id: 2,
        image: '',
        name: 'Product 2',
        price: 433,
        stock: 9,
      },
    ]);
  });

  it('return element one', () => {
    expect(ProductService.findOne(1)).toStrictEqual({
      description: 'bla bla',
      id: 1,
      image: '',
      name: 'Product 1',
      price: 122,
      stock: 12,
    });
  });
});
