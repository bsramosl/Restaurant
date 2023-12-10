import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AddEditMenuComponent } from './pages/add-edit-menu/add-edit-menu.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservarComponent } from './pages/reservar/reservar.component';
import { AddEditReservaComponent } from './pages/add-edit-reserva/add-edit-reserva.component';
import { RegistroComponent } from './pages/registro/registro/registro.component'; 
import { BarComponent } from './pages/bar/bar.component';
import { PedidosComponent } from './pages/pedidos/pedidos/pedidos.component';
import { AddEditBarComponent } from './pages/add-edit-bar/add-edit-bar.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AddEditUsuariosComponent } from './pages/add-edit-usuarios/add-edit-usuarios.component';
import { MapComponent } from './pages/map/map.component';
  
 

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    AddEditMenuComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    ReservarComponent,
    AddEditReservaComponent,
    RegistroComponent,
    BarComponent,
    PedidosComponent,
    AddEditBarComponent,
    UsuariosComponent,
    AddEditUsuariosComponent,
    MapComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
