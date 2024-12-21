import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ListapplicationsComponent } from './pages/applications/listapplications/listapplications.component';
import { DetailsapplicationsComponent } from './pages/applications/detailsapplications/detailsapplications.component';
import { EditapplicationsComponent } from './pages/applications/editapplications/editapplications.component';
import { ActualizarEmpleoComponent } from './pages/actualizar-empleo/actualizar-empleo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'postulante', component: ListapplicationsComponent},
  { path: 'postulacion/:idUsuario/:idEmpleo', component: DetailsapplicationsComponent },
  { path: 'editapplications/:idUsuario/:idEmpleo', component: EditapplicationsComponent },
  { path : '**', redirectTo : '', pathMatch : 'full'},
  { path: 'actualizar-empleo/:id', component: ActualizarEmpleoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
