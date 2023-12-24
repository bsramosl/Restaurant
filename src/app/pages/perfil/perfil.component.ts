import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '@app/services/empleado/empleado.service';
import { UserService } from '@app/services/user/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {  
  user: any;
  empleado: any = [];
  form!: FormGroup;

  constructor(private userService: UserService,
    private empeadoService: EmpleadoService,private fb: FormBuilder) {}

  ngOnInit(): void { 

    this.form = this.fb.group({     
    id_usuario: ['', Validators.required],
    usuario: ['', Validators.required],
    contrasena: [''],
    nombre: ['', Validators.required],
    apellido: [''],
    cedula: [''],
    correo: [''],
    direccion: [''],
    telefono: [''],
    id_ciudad : [''],
    id_tipo_usuario: ['']
  });
    this.user = this.userService.getCurrentUser(); 
    console.log(this.user); 
    this.userService.get(this.user.userId).subscribe(data => {
      this.form.setValue(data)   
    });
  }

  getUser(): any {

  }

}
