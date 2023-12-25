import { Component } from '@angular/core';
import { ReservaService } from 'app/services/reserva/reserva.service';
import { DetallereservaService } from 'app/services/detallereserva/detallereserva.service';
import { Reserva } from '../../models/reserva';
import { DetalleReserva } from '@app/models/detallereserva';
import { MenuService } from '@app/services/menu/menu.service';
import { UserService } from '@app/services/user/user.service'; 
import { BarService } from '@app/services/bar/bar.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  products!: any[];
  platos : number = 0;
  users : number = 0;
  bar : number = 0;

  
  list: Reserva[] = [];
  dat: any  = [];
  loading: boolean = false;

  constructor(private ReservaService: ReservaService,
    private detallereservaService: DetallereservaService,
    private barService: BarService,
    private menuService: MenuService,
    private userService: UserService) { }

   
  ngOnInit(): void {
    this.menuService.getList().subscribe((data)=>{  
      this.platos = data.length;              
    })   
    this.userService.getList().subscribe((data)=>{  
      this.users = data.length;              
    })    
    this.barService.getList().subscribe((data)=>{  
      this.bar = data.length;              
    })    
    this.getList();   
  }

  getList(){
    this.ReservaService.getList().subscribe((data: Reserva[])=>{
      this.list = data;
    }) 
  }

  detalle(id:number){
    this.detallereservaService.get(id).subscribe((data)=>{  
      this.dat = data;  
    })    
  }
}
