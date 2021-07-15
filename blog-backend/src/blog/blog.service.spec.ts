/*
 * @Author: your name
 * @Date: 2021-07-15 10:21:18
 * @LastEditTime: 2021-07-15 10:43:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-vue-project/blog-backend/src/blog/blog.service.spec.ts
 */
import { Test, TestingModule } from '@nestjs/testing';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  let service: BlogService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogService],
    }).compile();
    service = module.get<BlogService>(BlogService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
