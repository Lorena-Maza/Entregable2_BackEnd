import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { PersonasComponent } from './components/personas/personas.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/persona',
    pathMatch: 'full'
  },
  {
    path: 'persona',
    component: PersonasComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
