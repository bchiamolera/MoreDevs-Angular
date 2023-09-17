import { Component } from '@angular/core';

@Component({
  selector: 'app-ex06',
  templateUrl: './ex06.component.html',
  styleUrls: ['./ex06.component.css']
})
export class Ex06Component {
  result: number = 0;
  num1: number = 0;
  num2: number = 0;

  somar() {
    this.result = this.num1 + this.num2;
  }

  subtrair() {
    this.result = this.num1 - this.num2;
  }

  multiplicar() {
    this.result = this.num1 * this.num2;
  }

  dividir() {
    if (this.num2 == 0) {
      alert('Não é possível dividir por zero!');
      return;
    }
    this.result = this.num1 / this.num2;
  }
}
