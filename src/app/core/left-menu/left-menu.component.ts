import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  cities: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.cities.push('Madrid, Es');
    this.cities.push('Barcelona, Es');
    this.cities.push('Sevilla, Es');
    this.cities.push('Malaga, Es');
    this.cities.push('Santander, Es');
    this.cities.push('Coruña, Es');
  }

}
