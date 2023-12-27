import { Component } from '@angular/core';
import { MenuService } from 'app/services/menu/menu.service';
import { Menu } from '../../models/menu';
import { UserService } from '@app/services/user/user.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  user: any;
  list: Menu[] = [];
  loading: boolean = false;

  constructor(private menuService: MenuService,private userService: UserService) { }

   
  ngOnInit(): void {
    this.user = this.userService.getCurrentUser(); 
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
