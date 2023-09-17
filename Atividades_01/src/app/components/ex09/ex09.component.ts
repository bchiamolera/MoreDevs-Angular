import { Component } from '@angular/core';
import { TarefaItem } from 'src/shared/models/tarefaItem';

@Component({
  selector: 'app-ex09',
  templateUrl: './ex09.component.html',
  styleUrls: ['./ex09.component.css']
})
export class Ex09Component {
  tarefas: TarefaItem[] = [
    new TarefaItem('Estudar Angular', '13:00'),
    new TarefaItem('Estudar React', '14:00'),
    new TarefaItem('Estudar Vue', '15:00')
  ];

  tarefaText: string = '';
  tarefaTime: string = '';

  adicionarTarefa() {
    this.tarefas.push(new TarefaItem(this.tarefaText, this.tarefaTime));
  }
  
  removerTarefa(tarefa: TarefaItem) {
    this.tarefas = this.tarefas.filter(t => t !== tarefa);
  }
}
