import { Component } from '@angular/core';
import { ReservaService } from 'app/services/reserva/reserva.service';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {

  
  
  list: Reserva[] = [];
  loading: boolean = false;

  constructor(private ReservaService: ReservaService) { }

   
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

  detalle(){
    
  }

}
