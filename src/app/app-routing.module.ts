import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: '', component:MenuComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'produtos', component:ProdutosComponent},
  {path: 'cadastrar', component: CadastroProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
