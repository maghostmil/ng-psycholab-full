import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-click-game',
  templateUrl: './click-game.component.html',
  styleUrls: ['./click-game.component.css']
})
export class ClickGameComponent implements OnInit, AfterViewInit {
  user: any;
  rows: Array<number>;
  cols: Array<number>;
  currentNode: Array<number>;
  hits: number;
  misses: number;
  time: number;
  Timer;


  constructor(private http: HttpClient) { 
    const rowSize = 5, colSize = 5;
    this.rows = Array(rowSize).fill(0).map((x, i) => i);
    this.cols = Array(colSize).fill(0).map((x, i) => i);
    this.currentNode = [0, 0];
    this.hits = 0;
    this.misses = 0;
    this.time = 30;
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
    let row = Math.floor(Math.random() * (this.rows.length+5));
    let col = Math.floor(Math.random() * (this.cols.length+5));
    while (row === this.currentNode[0] && col === this.currentNode[1]) {
      row = Math.floor(Math.random() * this.rows.length);
      col = Math.floor(Math.random() * this.cols.length);
    }
    this.currentNode = [row, col];
    document.querySelectorAll('.side [data-row="' + row + '"]')[0].classList.toggle('active');
    document.querySelectorAll('.top [data-col="' + col + '"]')[0].classList.toggle('active');
  }

  btnClick(e) {
    if (this.Timer) {
      const btnNode: Array<number> = [+e.target.dataset.row, +e.target.dataset.col];
      const btnNodeSecond: Array<number> = [+e.target.dataset.row + 5, +e.target.dataset.col+ 5];
      
      if ((this.currentNode[0] === btnNode[0] && this.currentNode[1] === btnNode[1]) || (this.currentNode[0]  === btnNodeSecond[0] && this.currentNode[1] === btnNodeSecond[1])
    || (this.currentNode[0] === btnNodeSecond[0] && this.currentNode[1] === btnNode[1]) || (this.currentNode[0] === btnNode[0] && this.currentNode[1] === btnNodeSecond[1])
    ) {
        this.hits++;
        document.querySelectorAll('.side [data-row="' + this.currentNode[0] + '"]')[0].classList.toggle('active');
        document.querySelectorAll('.top [data-col="' + this.currentNode[1] + '"]')[0].classList.toggle('active');
        this.pickRandom();
      } else {
        this.misses++;
      }
    }
  }

  Refresh(){
    location.reload();
  }

}
