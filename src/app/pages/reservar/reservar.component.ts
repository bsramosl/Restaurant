import { Component } from '@angular/core';
import { ReservaService } from 'app/services/reserva/reserva.service';
import { DetallepedidoService } from 'app/services/detallepedido/detallepedido.service';
import { Reserva } from '../../models/reserva';
import { DetallePedido } from '@app/models/detallepedido';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {

  
  
  list: Reserva[] = [];
  dat: DetallePedido[] = [];
  loading: boolean = false;

  constructor(private ReservaService: ReservaService,private detpedidoService: DetallepedidoService) { }

   
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
    this.detpedidoService.get(id).subscribe((data)=>{
      
      this.dat = [data];  
      console.log(this.dat)  
    })    
  }

}
