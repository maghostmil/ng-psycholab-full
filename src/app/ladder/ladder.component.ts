import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {
  constructor(private http: HttpClient) { }
   userData: any;
  ngOnInit() {
    this.getAllUserData();
  }


  getAllUserData(){
    this.http.get('/api/getAllUsersData').subscribe(
      // Successful responses call the first callback.
      data => {
        this.userData = data;
      },
      // Errors will call this callback instead:
      err => {
        alert("Error occured!");
      }
    );
  }
}
