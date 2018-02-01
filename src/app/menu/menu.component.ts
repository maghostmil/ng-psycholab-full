import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  providers: [ UsersService ],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private users: UsersService) { }

 LoggedUser: any;

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.LoggedUser = currentUser.user;
  }
}
