import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { TodosModule } from './modules/todos/todos.module';

@Module({
  imports: [PrismaModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
