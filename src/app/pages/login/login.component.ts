import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { UserService } from '@app/services/user/user.service';
import {AuthService } from 'app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  form: FormGroup;

  constructor(private fb: FormBuilder,private appComponent: AppComponent,
    private router: Router,private authService: AuthService,
    private userService: UserService) {
    // Ocultar el navbar cuando se carga la página de inicio de sesión
    this.appComponent.showNavbar = false;
    this.form = this.fb.group({
      username:[null],
      password:[null], 
    });
  }
  

  login() { 
    this.authService.login(this.form.value.username, this.form.value.password).subscribe((response) => {
      if (response.success) {
        this.appComponent.showNavbar = true;            
        const token = response.token;
        // Guarda el token en localStorage
        this.authService.setToken(token);
        // Recupera información del usuario (puedes ajustar según tu API)
        const user = {
          userId: response.user.id_usuario,
          usuario: response.user.usuario,
          tipo_usuario:response.user.nombre_tipo_usuario,
          id_tipo_usuario:response.user.id_tipo_usuario
        }; 
        // Almacena el usuario en el servicio
        this.userService.setCurrentUser(user);
        if(user.tipo_usuario == 'Empleado' || user.tipo_usuario == 'Administrador'){
          this.router.navigate(['']); 
        }else{
          this.authService.logout();
        }

      } else {
        console.log('Login failed', response.message);
      }
    });
  }
  
}
