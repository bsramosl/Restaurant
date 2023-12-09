import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Menu } from 'app/models/menu';
import { MenuService } from 'app/services/menu/menu.service';

@Component({
  selector: 'app-add-edit-menu',
  templateUrl: './add-edit-menu.component.html',
  styleUrls: ['./add-edit-menu.component.css']
})
export class AddEditMenuComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = "Agregar ";


  constructor(private fb: FormBuilder,private menuService : MenuService,
    private router: Router,
    private aRouter: ActivatedRoute){
    this.form = this.fb.group({
      id_menu:[null],
      id_bar:[null],
      nombre_menu:['', Validators.required],
      plato:['', Validators.required],
      descripcion:[null, Validators.required],
      precio:[null, Validators.required],
      estado:[null, Validators.required],
      foto:[null, Validators.required],

    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    if (this.id !=0){
      this.operacion = 'Editar '
      this.getrpoduct(this.id);
    }
  }

  getrpoduct(id: number){
    this.loading = true;
    this.menuService.get(id).subscribe((data:Menu)=>{
      this.loading = false; 
      console.log(data);
      this.form.setValue(data)
    })
    
  }




  add(){ 

    const menu = this.form.value;

    this.loading = true;

    if(this.id !==0){    
      console.log(menu)
      this.menuService.update(this.id, menu).subscribe(()=>{       
        this.loading = false;  
        this.router.navigate(['menu']); 
      })
      
    }else{
      this.menuService.save(menu).subscribe(()=>{
        this.loading = false;    
        this.loading = false;  
        this.router.navigate(['menu']); 
    }) 
    }   
    this.loading = false;      

  }
}
