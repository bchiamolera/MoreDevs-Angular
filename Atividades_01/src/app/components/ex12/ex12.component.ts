import { Component } from '@angular/core';
import { User } from 'src/shared/models/userItem';

@Component({
  selector: 'app-ex12',
  templateUrl: './ex12.component.html',
  styleUrls: ['./ex12.component.css']
})
export class Ex12Component {
  user: User = new User('', '', '');
  usuarioInvalido: boolean = false;
  senhaInvalida: boolean = false;
  emailInvalido: boolean = false;

  onSubmit() {
    if (this.user.name === '') {
      this.usuarioInvalido = true;
    } else {
      this.usuarioInvalido = false;
    }
    if (this.user.email === '' || !this.user.email.includes('@')) {
      this.emailInvalido = true;
    } else {
      this.emailInvalido = false;
    }
    if (this.user.password === '' || this.user.password.length < 6) {
      this.senhaInvalida = true;
    } else {
      this.senhaInvalida = false;
    }
    if (this.usuarioInvalido || this.emailInvalido || this.senhaInvalida) {
      return;
    } else {
      alert('Usuário cadastrado com sucesso!');
    }
  }
}
