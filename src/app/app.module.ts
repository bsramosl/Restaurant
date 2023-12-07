import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashmenuComponent } from './pages/dashmenu/dashmenu.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ReservaComponent,
    DashboardComponent,
    DashmenuComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
