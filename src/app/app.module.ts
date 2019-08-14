import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialModule } from '../material/material.module';
import 'hammerjs';
import { TableComponent } from './table/table.component';

import { TeamComponent } from './team/team.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,MaterialModule,CommonModule ],
  declarations: [ AppComponent, HelloComponent, TableComponent, TeamComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
