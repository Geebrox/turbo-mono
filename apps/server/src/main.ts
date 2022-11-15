import { ConsoleLogger, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestFastifyApplication as App } from '@nestjs/platform-fastify';
import { FastifyAdapter as Adapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { PrismaService } from './modules/prisma/prisma.service';

(async () => {
  const app = await NestFactory.create<App>(AppModule, new Adapter(), {
    logger: new ConsoleLogger('APP', { logLevels: ['error', 'warn', 'debug'] }),
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(3001, '0.0.0.0');
  const mode = process.env.NODE_ENV || 'development';

  Logger.debug(
    `🚀 Server is running in ${mode} mode on port 3001`,
    'Bootstrap'
  );
})();
