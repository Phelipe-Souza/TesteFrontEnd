import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { ProdutosService } from '../produtos.service';
import { ProdutoModel } from './produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();
  produtos: Array<any> = new Array();

  constructor(private produtosService: ProdutosService,
               private router: Router,
               private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.listarProdutos();
  }

  atualizar(id: number){
      this.produtosService.atualizarProdutos(id, this.produto).subscribe(produto => {
      this.produto = new ProdutoModel();
      this.listarProdutos();
    }, err => { console.log('Erro ao Atualizar Produto') }
    )
  }

  remover(id:number){
    this.produtosService.removerProduto(id).subscribe(produto => {
      this.produto = new ProdutoModel();
      this.listarProdutos();
  }, err => { console.log('Erro ao Atualizar Produto')
    })
  }



  cadastrar() {
     this.produtosService.cadastrarProdutos(this.produto).subscribe(produto => {
      this.produto = produto;
      alert ('Produto cadastrado com sucesso!')
      this.produto = new ProdutoModel()
    }, err => { console.log('Erro ao Cadastrar Produto') }
    )
  }

  listarProdutos(){
    this.produtosService.listarProdutos() .subscribe (produtos => {
      this.produtos = produtos
    }, err => {
      console.log('Erro ao Buscar Produtos', err);
    })
  }
    
}
