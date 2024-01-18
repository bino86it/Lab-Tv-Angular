import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccediComponent } from './components/accedi/accedi.component';
import { CercaComponent } from './components/cerca/cerca.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HomeComponent } from './components/home/home.component';
import { DettaglioFilmComponent } from './components/dettaglio-film/dettaglio-film.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'accedi', component: AccediComponent },
  { path: 'cerca', component: CercaComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'dettaglio/:id', component: DettaglioFilmComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
