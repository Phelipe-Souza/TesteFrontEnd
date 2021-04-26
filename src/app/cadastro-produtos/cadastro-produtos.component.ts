import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ProdutoModel } from '../produtos/produto.model';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();
  produtos: Array<any> = new Array();

  constructor(public produtosService: ProdutosService) { }

  ngOnInit(){
  }
  listarProdutos(){
    this.produtosService.listarProdutos() .subscribe (produtos => {
      this.produtos = produtos
    }, err => {
      console.log('Erro ao Buscar Produtos', err);
    })
 }

  cadastrar() {
    console.log(this.produto);
    this.produtosService.cadastrarProdutos(this.produto).subscribe(produto => {
      this.produto = new ProdutoModel();
      this.listarProdutos();
    }, err => { console.log('Erro ao Cadastrar Produto') }
    )
  }

  atualizar(id: number){
    this.produtosService.atualizarProdutos(id, this.produto).subscribe(produto => {
    this.produto = new ProdutoModel();
    this.listarProdutos();
  }, err => { console.log('Erro ao Atualizar Produto') }
  )
}

}
