import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['../click-game/click-game.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() row: number;
  @Input() col: number;
  @Input() primary: boolean; 
  constructor() { }

  ngOnInit() {
  }

}
