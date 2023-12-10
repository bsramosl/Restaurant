import { Component } from '@angular/core';
import { BarService } from 'app/services/bar/bar.service';
import { Bar } from '../../models/bar';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
    
  list: Bar[] = [];
  loading: boolean = false;

  constructor(private barService: BarService) { }

   
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
    this.loading = true;
     this.barService.delete(id).subscribe(()=>{
       this.getListProducts() 
     })
  }

}
