import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { PatternComponent } from './components/pattern/pattern.component';
import { DataPatternsService } from './services/data-patterns.service';
// import { PatternItemComponent } from './components/pattern-item/pattern-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PatternComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
