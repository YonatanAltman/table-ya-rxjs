import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialModule } from '../material/material.module';
import 'hammerjs';
import { TableComponent } from './table/table.component';
import { TableService } from './table/table.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule,MaterialModule ],
  declarations: [ AppComponent, HelloComponent, TableComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TableService]
})
export class AppModule { }
