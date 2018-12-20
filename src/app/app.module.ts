import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { PatternComponent } from './components/pattern/pattern.component';
import { DataPatternsService } from './services/data-patterns.service';
// import { PatternItemComponent } from './components/pattern-item/pattern-item.component';
import { ParticlesModule } from 'angular-particle';
import * as $ from 'jquery';
import { PatternItemComponent } from './components/pattern-item/pattern-item.component';
import { BassComponentComponent } from './components/bass-component/bass-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PatternComponent,
    PatternItemComponent,
    BassComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule,
    ParticlesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
