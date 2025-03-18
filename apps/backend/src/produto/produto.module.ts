import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProdutoPrisma } from './produto.prisma';

@Module({
  imports: [DatabaseModule],
  controllers: [ProdutoController],
  providers: [ProdutoPrisma],
})
export class ProdutoModule {}
