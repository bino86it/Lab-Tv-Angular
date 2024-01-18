import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AccediComponent } from './components/accedi/accedi.component';
import { CercaComponent } from './components/cerca/cerca.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DettaglioFilmComponent } from './components/dettaglio-film/dettaglio-film.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccediComponent,
    CercaComponent,
    ContattiComponent,
    DettaglioFilmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatMenuModule,
    MatCheckboxModule,
    
  
    
    

    
    
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
