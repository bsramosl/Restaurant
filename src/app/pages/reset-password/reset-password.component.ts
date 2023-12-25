import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/services/auth/auth.service';
import { AppComponent } from '@app/app.component';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token: string='';
  newPassword: string='';

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router,
    private appComponent: AppComponent) {
      this.appComponent.showNavbar = false;
    }

  ngOnInit() {
    // Obtener el token de la URL
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];
    });
  }

  resetPassword() {
    // Llamar al servicio para cambiar la contraseña
    this.authService.resetPassword(this.token, this.newPassword).subscribe(
      (response) => {
        if (response.success) {
          // Redirigir a la página de inicio de sesión o a la página deseada
          this.router.navigate(['/login']);
        } else {
          // Manejar errores o mostrar mensajes de error
          console.log('Error al cambiar la contraseña:', response.message);
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}