import {
  Controller,
  Get,
  Param,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ParseIntPipe } from '../common/parse-int.pipe';

import { ProductsService } from './../services/products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 200, description: 'Return all products' })
  getProducts() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 200, description: 'Return a single product' })
  @ApiResponse({ status: 404, description: 'Product not found' })
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }
}
