import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from '@entities/entities';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([...Entities])],
  exports: [TypeOrmModule]
})
export class ModelsModule {}
