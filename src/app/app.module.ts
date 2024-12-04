import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Necessário para formulários e ngModel

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HighlightDirective } from './diretivas/highlight.directive';
import { TextColorDirective } from './diretivas/text-color.directive';
import { DetalhesLivroPipe } from './pipes/detalhes-livro.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    DetalhesComponent,
    SobreComponent,
    HighlightDirective,
    TextColorDirective,
    DetalhesLivroPipe,
    UppercasePipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
