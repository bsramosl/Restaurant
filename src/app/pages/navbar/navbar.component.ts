import { Component } from '@angular/core';
import { UserService } from '@app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Obtén el usuario del servicio
    this.user = this.userService.getCurrentUser();
  }

}
