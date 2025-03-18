import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProdutoPrisma } from './produto.prisma';
import { Produto } from '@gstore/core';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produto: ProdutoPrisma) {}

  @Get()
  async obter(): Promise<Produto[]> {
    return this.produto.obter();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: number): Promise<Produto | null> {
    return this.produto.obterPorId(+id);
  }

  @Post('salvar')
  async salvar(@Body() produto: Produto): Promise<void> {
    return this.produto.salvar(produto);
  }

  @Delete(':id')
  async deletar(@Param('id') id: number): Promise<void> {
    return this.produto.deletar(+id);
  }
}
