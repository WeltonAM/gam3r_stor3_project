import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProdutoModule, PedidoModule, DatabaseModule],
  controllers: [AppController],
})
export class AppModule {}
