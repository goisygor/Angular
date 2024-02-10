import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Seletor do componente
  templateUrl: './app.component.html', // Caminho para o arquivo de template HTML
  styleUrls: ['./app.component.css'], // Caminho para o arquivo de estilos CSS
  standalone: true // Indica que este componente é independente e não é usado em outro contexto
})
export class AppComponent {
  title = 'ProjetoAngular'; // Variável do título do componente
  tarefa = ""; // Variável para armazenar a tarefa digitada pelo usuário
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; // Lista de itens da todo-list

  // Método para adicionar uma nova tarefa à lista
  addTarefa() {
    // Verifica se a tarefa não está vazia ou apenas com espaços em branco
    if (this.tarefa.trim() !== "") {
      // Adiciona a tarefa à lista de itens
      this.items.push(this.tarefa);
      // Limpa o campo de entrada após adicionar a tarefa
      this.tarefa = "";
    }
  }

  // Método para remover uma tarefa da lista
  removeTarefa(item: string) {
    // Encontra o índice da tarefa na lista de itens
    const index = this.items.indexOf(item);
    // Remove a tarefa se encontrada na lista
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
