import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-click-game2',
  templateUrl: './click-game2.component.html',
  styleUrls: ['../click-game/click-game.component.css']
})
export class ClickGame2Component implements OnInit, AfterViewInit {
  user: any;
  rows: Array<number>;
  currentRow: number;
  hits: number;
  misses: number;
  time: number;
  Timer;
  constructor(private http: HttpClient) { 
    this.rows = Array(7).fill(0).map((x, i) => i);
    this.currentRow = 0;
    this.hits = 0;
    this.misses = 0;
    this.time = 60;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.user = currentUser.user;
  }

  ngOnInit() {
    this.Timer = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        clearInterval(this.Timer);
        this.Timer = false;
        this.SaveDataToDB();
      }
    }, 1000);
  }

  ngAfterViewInit() {
    this.pickRandom();
  }

  SaveDataToDB(){
    let body= {
      user: this.user,
      points: this.hits
    }

    this.http.post('/api/saveGameData', body).subscribe(
      // Successful responses call the first callback.
      data => {

      },
      // Errors will call this callback instead:
      err => {
        alert("Error saving data!");
      }
    );
  }

  pickRandom() {
    let row = Math.floor(Math.random() * this.rows.length);
    while (row === this.currentRow) {
      row = Math.floor(Math.random() * this.rows.length);
    }
    this.currentRow = row;
    document.querySelectorAll('.top [data-row="' + row + '"]')[0].classList.toggle('active');
  }



  btnClick(e) {
    const btnRow: number = +e.target.dataset.row;
    console.log(this.currentRow === btnRow);
    if (this.currentRow !== btnRow) {
      this.misses++;
    } else {
      this.hits++;
      document.querySelectorAll('.top [data-row="' + this.currentRow + '"]')[0].classList.toggle('active');
      this.pickRandom();
    }
  }

  Refresh(){
    location.reload();
  }
}
