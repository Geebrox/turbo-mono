import { NestFactory } from '@nestjs/core';
import { FastifyAdapter as Adapter } from '@nestjs/platform-fastify';
import type { NestFastifyApplication as App } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

(async () => {
  const app = await NestFactory.create<App>(AppModule, new Adapter());
  await app.listen(3001, '0.0.0.0');
})();
