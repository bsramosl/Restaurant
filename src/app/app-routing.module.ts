import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { MenuComponent } from './pages/menu/menu.component';
import { AddEditMenuComponent } from './pages/add-edit-menu/add-edit-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservarComponent } from './pages/reservar/reservar.component';
import { AddEditReservaComponent } from './pages/add-edit-reserva/add-edit-reserva.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [ 

  {path: '',component:HomeComponent,canActivate: [AuthGuard]}, 

  {path: 'login', component:LoginComponent}, 

  {path: 'menu', component:MenuComponent,canActivate: [AuthGuard]}, 
  {path: 'add-menu', component:AddEditMenuComponent,canActivate: [AuthGuard]}, 
  {path:'edit-menu/:id',component:AddEditMenuComponent,canActivate: [AuthGuard]},
 
  {path: 'reserva', component:ReservarComponent,canActivate: [AuthGuard]}, 
  {path: 'add-reserva', component:AddEditReservaComponent,canActivate: [AuthGuard]}, 
  {path:'edit-reserva/:id',component:AddEditReservaComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
