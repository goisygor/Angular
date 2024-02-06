import { NgModule } from &#39;@angular/core&#39;;
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
{ path: 'header', component: HeaderComponent },
{ path: 'footer', component: FooterComponent },
{ path: 'Home', component: HomeComponent },
{ path: 'Sobre', component: SobreComponent },
{ path: 'Contato', component: ContatoComponent },
{path: "", redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}