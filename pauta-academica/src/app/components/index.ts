import { Component, computed, signal } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  selector: 'app-gerenciador',
  templateUrl: './gerenciador.html',
  styleUrl: './gerenciador.css'
})
export class Gerenciador {
  novaTarefa = signal('');
  private proximoId = 3;

  tarefas = signal<Tarefa[]>([
    {
      id: 1,
      titulo: 'Estudar TypeScript',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Criar projeto Angular',
      concluida: true
    }
  ]);

  pendentes = computed(() => this.tarefas().filter(t => !t.concluida).length);
  temConcluidas = computed(() => this.tarefas().some(t => t.concluida));

  atualizarTexto(evento: Event) {
    const campo = evento.target as HTMLInputElement;
    this.novaTarefa.set(campo.value);
  }

  adicionar() {
    const texto = this.novaTarefa().trim();
    if (texto === '') return;

    const tarefa: Tarefa = {
      id: this.proximoId++,
      titulo: texto,
      concluida: false
    };

    this.tarefas.update(lista => [...lista, tarefa]);
    this.novaTarefa.set('');
  }

  alternar(id: number) {
    this.tarefas.update(lista =>
      lista.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  excluir(id: number) {
    this.tarefas.update(lista => lista.filter(tarefa => tarefa.id !== id));
  }

  limparConcluidas() {
    this.tarefas.update(lista => lista.filter(tarefa => !tarefa.concluida));
  }
}
