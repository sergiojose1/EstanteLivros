import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'catalogo', component: CatalogoComponent }, // Página de Sugestões
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'sobre', component: SobreComponent }, // Página Sobre
  { path: '**', redirectTo: '' }, // Redireciona rotas não encontradas para a página principal
  { path: 'livro/:id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
