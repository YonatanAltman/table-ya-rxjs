import { Injectable } from '@angular/core';
import { employee } from '../model/model';
@Injectable()
export class TableService {
  employees: employee[] = []
  constructor() { }
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any[] = ELEMENT_DATA;

  private setTabel() {

  }

}