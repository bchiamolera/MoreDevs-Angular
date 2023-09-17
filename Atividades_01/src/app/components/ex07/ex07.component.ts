import { Component } from '@angular/core';

@Component({
  selector: 'app-ex07',
  templateUrl: './ex07.component.html',
  styleUrls: ['./ex07.component.css']
})
export class Ex07Component {
  painelAtual: string = 'painel1';

  exibirPainel(painel: string) {
    this.painelAtual = painel;
  }
}
