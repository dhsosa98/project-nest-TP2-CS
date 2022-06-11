import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('Products', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET products`, () => {
    return request(app.getHttpServer()).get('/products').expect(200);
  });

  it(`/GET ONE product that exist`, () => {
    const id = 1;
    return request(app.getHttpServer())
      .get('/products/' + id)
      .expect(200);
  });

  it(`/GET ONE product that not exist`, () => {
    const id = 9999;
    return request(app.getHttpServer())
      .get('/products/' + id)
      .expect(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
