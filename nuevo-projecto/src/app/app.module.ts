import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ConversorComponent } from './conversor/conversor.component';
import { FraseComponent } from './frase/frase.component';
import { FraseFormComponent } from './frase-form/frase-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    ConversorComponent,
    FraseComponent,
    FraseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Se agreaga para poder trabajar con los componentes del formulario
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
