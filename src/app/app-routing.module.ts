import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { MenuComponent } from './pages/menu/menu.component';
import { AddEditMenuComponent } from './pages/add-edit-menu/add-edit-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservarComponent } from './pages/reservar/reservar.component';
import { AddEditReservaComponent } from './pages/add-edit-reserva/add-edit-reserva.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro/registro.component';
import { BarComponent } from './pages/bar/bar.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AddEditBarComponent } from './pages/add-edit-bar/add-edit-bar.component';
import { AddEditUsuariosComponent } from './pages/add-edit-usuarios/add-edit-usuarios.component';

const routes: Routes = [ 

  {path: '',component:HomeComponent,canActivate: [AuthGuard]}, 

  {path: 'login', component:LoginComponent}, 
  {path: 'registro', component:RegistroComponent},

  {path: 'usuario', component:UsuariosComponent,canActivate: [AuthGuard]}, 
  {path: 'add-usuario', component:AddEditUsuariosComponent,canActivate: [AuthGuard]}, 
  {path:'edit-usuario/:id',component:AddEditUsuariosComponent,canActivate: [AuthGuard]},

  {path: 'menu', component:MenuComponent,canActivate: [AuthGuard]}, 
  {path: 'add-menu', component:AddEditMenuComponent,canActivate: [AuthGuard]}, 
  {path:'edit-menu/:id',component:AddEditMenuComponent,canActivate: [AuthGuard]},
 
  {path: 'reserva', component:ReservarComponent,canActivate: [AuthGuard]}, 
  {path: 'add-reserva', component:AddEditReservaComponent,canActivate: [AuthGuard]}, 
  {path:'edit-reserva/:id',component:AddEditReservaComponent,canActivate: [AuthGuard]},

  {path: 'bar', component:BarComponent,canActivate: [AuthGuard]}, 
  {path: 'add-bar', component:AddEditBarComponent,canActivate: [AuthGuard]}, 
  {path:'edit-bar/:id',component:AddEditBarComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
