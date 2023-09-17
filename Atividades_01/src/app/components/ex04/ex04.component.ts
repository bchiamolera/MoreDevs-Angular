import { Component } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component {
  username: string = '';
  password: string = '';
  showError: boolean = false;
  showSuccess: boolean = false;

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.showError = false;
      this.showSuccess = true;
    } else {
      this.showError = true;
      this.showSuccess = false;
    }
  }
}
