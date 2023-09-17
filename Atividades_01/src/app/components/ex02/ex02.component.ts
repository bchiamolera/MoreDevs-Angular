import { Component } from '@angular/core';
import { TarefaItem } from 'src/shared/models/tarefaItem';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component {
  tarefas: TarefaItem[] = [
    new TarefaItem('Acordar', '7:00'),
    new TarefaItem('Tomar café da manhã', '7:30'),
    new TarefaItem('Passear com o cachorro', '10:00'),
    new TarefaItem('Fazer o almoço', '11:00'),
    new TarefaItem('Almoçar', '12:00'),
    new TarefaItem('Estudar C#', '13:30'),
    new TarefaItem('Tomar café da tarde', '15:30'),
    new TarefaItem('Fazer a janta', '18:00'),
    new TarefaItem('Jantar', '19:00'),
    new TarefaItem('Ler livro', '20:00'),
    new TarefaItem('Dormir', '22:00')
  ];

  newTarefaText: string = '';
  newTarefaTime: string = '';

  adicionarTarefa() {
    this.tarefas.push(new TarefaItem(this.newTarefaText, this.newTarefaTime));
  }
}
