import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { testDirective } from './test.directive';
import { PlugComponent } from '../plug/plug.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, testDirective, PlugComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
