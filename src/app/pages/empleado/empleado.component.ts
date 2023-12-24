import { Component } from '@angular/core';
import { EmpleadoBar } from '@app/models/reserva';
import { EmpleadoService } from '@app/services/empleado/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  
  
  
  list: EmpleadoBar[] = [];
  loading: boolean = false;

  constructor(private empleadoService: EmpleadoService) { }

   
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
 
  delete(id: number){
    this.loading = true;
     this.empleadoService.delete(id).subscribe(()=>{
       this.getListProducts() 
     })
  }
}
