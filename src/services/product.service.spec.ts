import { ProductsService } from './products.service';

describe('ProductService', () => {
  let ProductService: ProductsService;

  beforeEach(() => {
    ProductService = new ProductsService();
  });

  const productSnapshot = {
    description: expect.any(String),
    id: expect.any(Number),
    image: expect.any(String),
    name: expect.any(String),
    price: expect.any(Number),
    stock: expect.any(Number),
  };

  it('return array Products', () => {
    ProductService.findAll().forEach((product) => {
      expect(product).toMatchSnapshot(productSnapshot);
    });
  });

  it('return element one', () => {
    expect(ProductService.findOne(1)).toMatchSnapshot(productSnapshot);
  });
});
