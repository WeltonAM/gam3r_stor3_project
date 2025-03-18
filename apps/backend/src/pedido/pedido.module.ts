import { Module } from '@nestjs/common';
import { PedidoController } from './pedido.controller';
import { PedidoPrisma } from './pedido.prisma';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PedidoController],
  providers: [PedidoPrisma],
})
export class PedidoModule {}
