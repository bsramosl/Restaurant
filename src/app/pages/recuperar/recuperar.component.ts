import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/services/auth/auth.service';
import { AppComponent } from '@app/app.component';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,private appComponent: AppComponent) {
    this.appComponent.showNavbar = false;
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submit() {
    const email = this.form.value.email;
    this.authService.requestPasswordReset(email).subscribe(
      (response) => {
        console.log('Password reset request successful', response);
      },
      (error) => {
        console.error('Password reset request failed', error);
      }
    );
  }

}
