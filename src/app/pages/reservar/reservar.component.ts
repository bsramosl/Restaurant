import { Component } from '@angular/core';
import { ReservaService } from 'app/services/reserva/reserva.service';
import { DetallereservaService } from 'app/services/detallereserva/detallereserva.service';
import { Reserva } from '../../models/reserva';
import { DetalleReserva } from '@app/models/detallereserva';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {

  
  
  list: Reserva[] = [];
  dat: any = [];
  loading: boolean = false;

  constructor(private ReservaService: ReservaService,private detallereservaService: DetallereservaService) { }

   
  ngOnInit(): void {
    this.getListProducts();   
  }

  getListProducts(){
    this.loading = true;
    this.ReservaService.getList().subscribe((data: Reserva[])=>{
      this.list = data;
      console.log(data);
      this.loading = false;
    })

  }
 
  delete(id: number){
    this.loading = true;
     this.ReservaService.delete(id).subscribe(()=>{
       this.getListProducts() 
     })
  }

  detalle(id:number){
    this.detallereservaService.get(id).subscribe((data)=>{
      
      this.dat = data;  
      console.log(this.dat)  
    })    
  }

}
