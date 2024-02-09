import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoAngular';
  public tarefa = "";
  public itens = ['Item 1','Item 2','Item 3','Item 4'];

addTarefa (){
  this.itens.push(this.tarefa);
  
}

removeTarefa(item: string){
  this.itens.splice(this.itens.indexOf(item),1);

  

}

}
