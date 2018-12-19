import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { PatternComponent } from './components/pattern/pattern.component';
import { DataPatternsService } from './services/data-patterns.service';
<<<<<<< HEAD
// import { PatternItemComponent } from './components/pattern-item/pattern-item.component';
=======
import { ParticlesModule } from 'angular-particle';
>>>>>>> f4e3ac590998b794d999e0ea51d18a491ac75698
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    PatternComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
