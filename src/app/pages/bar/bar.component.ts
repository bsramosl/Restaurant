import { Component } from '@angular/core';
import { BarService } from 'app/services/bar/bar.service';
import { Bar } from '../../models/bar';
import { MensajeService } from '@app/services/mensaje/mensaje.service';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
    
  list: Bar[] = [];
  loading: boolean = false;
  env = environment.endpoint; 

  constructor(private barService: BarService,private mensajeService: MensajeService,) { }

   
  ngOnInit(): void {
    this.getListProducts();   
  }

  getListProducts(){
    this.loading = true;
    this.barService.getList().subscribe((data: Bar[])=>{
      this.list = data;
      console.log(data);
      this.loading = false;
    })

  }
 
  deleteProduct(id: number){
    this.barService.delete(id).subscribe(
      () => {
        // Aquí se ejecuta después de la eliminación exitosa
        this.getListProducts();
        
        // Mostrar el SweetAlert después de la eliminación exitosa
        this.mensajeService.showAlert('Eliminado', 'Eliminado exitosamente', 'success')
      },
      (error) => { 
        // Mostrar SweetAlert de error
        this.mensajeService.showAlert('Error', 'Error al eliminar el empleado', 'error');
      }
    );
  }
  

}
