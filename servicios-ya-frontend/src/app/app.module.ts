import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ActualizarEmpleoComponent } from './pages/actualizar-empleo/actualizar-empleo.component';
import { EditapplicationsComponent } from './pages/applications/editapplications/editapplications/editapplications.component';
import { ListapplicationsComponent } from './pages/applications/listapplications/listapplications/listapplications.component';
import { DetailsapplicationsComponent } from './pages/applications/detailsapplications/detailsapplications/detailsapplications.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EmpleadosListaComponent } from './pages/empleados-lista/empleados-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ActualizarEmpleoComponent,
    ListapplicationsComponent,
    EditapplicationsComponent,
    DetailsapplicationsComponent,
    InfoCardComponent,
    SearchBarComponent,
    EmpleadosListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent],
})
export class AppModule {}
