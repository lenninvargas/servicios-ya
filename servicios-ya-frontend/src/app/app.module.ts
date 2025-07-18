import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FormsModule,
  NgSelectOption,
  ReactiveFormsModule,
} from '@angular/forms'; // Importa ReactiveFormsModule
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

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { EmpleosComponent } from './pages/empleos/empleos.component';
import { DetalleEmpleoComponent } from './pages/detalle-empleo/detalle-empleo.component';

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

    EmpleosComponent,
    DetalleEmpleoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
