import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';
import { FraseComponent } from './frase/frase.component';
import { FraseFormComponent } from './frase-form/frase-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'conversor',component:ConversorComponent},
  {path: 'frases',component:FraseComponent},
  {path: 'frasesForm',component:FraseFormComponent},
  {path: 'frasesForm/:id',component:FraseFormComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
