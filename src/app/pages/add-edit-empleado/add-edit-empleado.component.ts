import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoBar } from '@app/models/empleado';
import { Usuario } from '@app/models/usuarios';
import { EmpleadoService } from '@app/services/empleado/empleado.service';
import { UserService } from '@app/services/user/user.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
})
export class AddEditEmpleadoComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';
  usuarios: Usuario[] = [];

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private router: Router,
    private userService: UserService, // Agrega este servicio

    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      id_empleado_bar: [null],
      id_bar: [null],
      usuario: [null],
      nombre: [null],
      apellido: [null],
      estado: ['Activo']
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.getUsuarios();
    if (this.id != 0) {
      this.operacion = 'Editar ';
      this.getrpoduct(this.id);
    }
  }

  getrpoduct(id: number) {
    this.loading = true;
    this.empleadoService.get(id).subscribe((data: EmpleadoBar) => {
      this.loading = false;
      this.form.setValue(data);
    });
  }

  getUsuarios() {
    this.userService.getList().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  onUsuarioSelected() {
    const selectedUserId = this.form.get('usuario')?.value;
    // Buscar el usuario en la lista por id_usuario
    const selectedUser = this.usuarios.find(
      (user) => user.id_usuario == selectedUserId
    );
    if (selectedUser) {
      this.form.patchValue({
        nombre: selectedUser.nombre,
        apellido: selectedUser.apellido,
        // Agrega más campos según sea necesario
      });
    } else {
      console.log('Usuario no encontrado en la lista');
    }
  }

  add() {
    const menu = this.form.value;
    this.loading = true;
    if (this.id !== 0) {
      this.empleadoService.update(this.id, menu).subscribe(() => {
        this.loading = false;
        this.router.navigate(['empledo']);
      });
    } else {
      this.empleadoService.save(menu).subscribe(() => {
        this.loading = false;
        this.loading = false;
        this.router.navigate(['empledo']);
      });
    }
    this.loading = false;
  }
}
