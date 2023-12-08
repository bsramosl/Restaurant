import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { MenuComponent } from './pages/menu/menu.component';
import { AddEditMenuComponent } from './pages/add-edit-menu/add-edit-menu.component';

const routes: Routes = [ 

  {path: 'menu', component:MenuComponent}, 
  {path: 'add-menu', component:AddEditMenuComponent}, 
  {path:'edit-menu/:id',component:AddEditMenuComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
