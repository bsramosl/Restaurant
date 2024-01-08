import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant';
  showNavbar = true;  

  constructor(private authService: AuthService, private router: Router,private userService: UserService) {}

  
  user: any;
 
  ngOnInit(): void {
    // Obtén el usuario del servicio
    this.user = this.userService.getCurrentUser();
  }


  logout() {
    this.authService.logout();
    this.showNavbar = false;  
    this.router.navigate(['login']);   
  }
  
}
