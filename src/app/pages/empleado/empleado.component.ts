import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoBar } from '@app/models/reserva';
import { EmpleadoService } from '@app/services/empleado/empleado.service';
import { MensajeService } from '@app/services/mensaje/mensaje.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  
  
  
  list: EmpleadoBar[] = [];
  loading: boolean = false;

  constructor(private empleadoService: EmpleadoService,private mensajeService: MensajeService,
    private router: Router,) { }

   
  ngOnInit(): void {
    this.getListProducts();   
  }

  getListProducts(){
    this.loading = true;
    this.empleadoService.getList().subscribe((data: EmpleadoBar[])=>{
      this.list = data;
      console.log(data);
      this.loading = false;
    })

  }
 
  delete(id: number) {
    this.empleadoService.delete(id).subscribe(
      () => {
        // Aquí se ejecuta después de la eliminación exitosa
        this.getListProducts();
        
        // Mostrar el SweetAlert después de la eliminación exitosa
        this.mensajeService.showAlert('Eliminado', 'Empleado eliminado exitosamente', 'success')
      },
      (error) => { 
        // Mostrar SweetAlert de error
        this.mensajeService.showAlert('Error', 'Error al eliminar el empleado', error);
      }
    );
  }
}