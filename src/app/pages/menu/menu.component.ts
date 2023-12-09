import { Component } from '@angular/core';
import { MenuService } from 'app/services/menu/menu.service';
import { Menu } from '../../models/menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  
  list: Menu[] = [];
  loading: boolean = false;

  constructor(private menuService: MenuService) { }

   
  ngOnInit(): void {
    this.getListProducts();   
  }

  getListProducts(){
    this.loading = true;
    this.menuService.getList().subscribe((data: Menu[])=>{
      this.list = data;
      console.log(data);
      this.loading = false;
    })

  }
 
  deleteProduct(id: number){
    this.loading = true;
     this.menuService.delete(id).subscribe(()=>{
       this.getListProducts() 
     })
  }

}
