import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UsersService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private users: UsersService) {

  }
  ngOnInit() {
  }

  Login(user, pass) {
    let body = {
      user: user,
      pass: pass
    };

    this.http.post('/api/login', body).subscribe(
      // Successful responses call the first callback.
      data => {
        this.users.setCurrentUser(body.user);
        localStorage.setItem('currentUser',JSON.stringify(body));
        this.router.navigate(['/menu']);
      },
      // Errors will call this callback instead:
      err => {
       alert('No user matched!');
      }
    );
  }

  Register(user, pass) {
    let body = {
      user: user,
      pass: pass
    };

    this.http.post('/api/register', body).subscribe(
      // Successful responses call the first callback.
      data => {
       alert("User Created!");
      },
      // Errors will call this callback instead:
      err => {
        alert("User already exist!");
      }
    );
  }

}
