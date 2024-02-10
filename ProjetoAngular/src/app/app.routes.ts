import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'; // Importa o módulo CommonModule
import { RouterModule } from '@angular/router'; // Importa o módulo RouterModule para roteamento
import { FormsModule } from '@angular/forms'; // Importa o módulo FormsModule para formulários

import { AppComponent } from "./app.component"; // Importa o componente AppComponent
import { routes } from './app.routes'; // Importa as rotas definidas em app.routes

@NgModule({
    declarations: [AppComponent], // Declara o componente AppComponent
    imports: [
        BrowserModule, // Importa o módulo BrowserModule para funcionalidades do navegador
        FormsModule, // Importa o módulo FormsModule para funcionalidades de formulários
        CommonModule, // Importa o módulo CommonModule para funcionalidades comuns
        RouterModule.forRoot(routes), // Configura as rotas principais usando as rotas definidas em app.routes
    ],  
    providers: [], // Define os provedores de serviços
    bootstrap: [AppComponent] // Define o componente raiz para inicialização
})
export class AppModule { } // Define o módulo principal AppModule e exporta-o
export { routes }; // Exporta as rotas
