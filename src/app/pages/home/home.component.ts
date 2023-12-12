import { Component } from '@angular/core';
import { ReservaService } from 'app/services/reserva/reserva.service';
import { DetallepedidoService } from 'app/services/detallepedido/detallepedido.service';
import { Reserva } from '../../models/reserva';
import { DetallePedido } from '@app/models/detallepedido';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  products!: any[];

  
  list: Reserva[] = [];
  dat: DetallePedido[] = [];
  loading: boolean = false;

  constructor(private ReservaService: ReservaService,private detpedidoService: DetallepedidoService) { }

   
  ngOnInit(): void {
    this.getList();   
  }

  getList(){
    this.ReservaService.getList().subscribe((data: Reserva[])=>{
      this.list = data;
    }) 
  }

  detalle(id:number){
    this.detpedidoService.get(id).subscribe((data)=>{
      
      this.dat = [data];  
      console.log(this.dat)  
    })    
  }
}
