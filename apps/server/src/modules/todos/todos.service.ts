import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateTodoDto) {
    return this.prismaService.todo.create({ data });
  }

  findAll() {
    return this.prismaService.todo.findMany();
  }

  findOne(id: string) {
    return this.prismaService.todo.findFirst({ where: { id } });
  }

  update(id: string, data: UpdateTodoDto) {
    return this.prismaService.todo.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prismaService.todo.delete({ where: { id } });
  }
}
