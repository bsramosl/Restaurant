import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashmenuComponent } from './pages/dashmenu/dashmenu.component';

const routes: Routes = [

  {path: 'ad-home', component:DashboardComponent},
  {path: 'ad-menu', component:DashmenuComponent},
  



  {path: 'home', component:HomeComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'reserva', component:ReservaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
