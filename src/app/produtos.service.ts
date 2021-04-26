import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoModel } from './produtos/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient ) { }

  listarProdutos(): Observable<any>{
    return this.http.get(" http://localhost:3000/produtos")
  }

   
  cadastrarProdutos(produtos: ProdutoModel): Observable<any>{
    return this.http.post("http://localhost:3000/produtos", produtos);

  }
  
  atualizarProdutos(id:any, produto: ProdutoModel): Observable<any>{
    return this.http.put("http://localhost:3000/produtos/".concat(id), produto);
  }

  removerProduto(id:any){
    return this.http.delete("http://localhost:3000/produtos/".concat(id));
  }
  

  
}
