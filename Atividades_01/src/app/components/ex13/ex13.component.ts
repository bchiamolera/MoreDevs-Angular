import { Component } from '@angular/core';

@Component({
  selector: 'app-ex13',
  templateUrl: './ex13.component.html',
  styleUrls: ['./ex13.component.css']
})
export class Ex13Component {
  isOn: boolean = false;

  toggleLamp() {
    this.isOn = !this.isOn;
  }
}
