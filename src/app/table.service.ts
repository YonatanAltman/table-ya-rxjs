import { Injectable } from '@angular/core';
import { employee, tableData } from '../model/model';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class TableService {
  public get tableData(): tableData {
    return {
      columns: WindColumn[];
      items: this.list$.asObservable(),
      isMulti?: boolean;
      pageSizeOptions?: number[];
      icon?: string;
      tableId?: string;
      title?: string;


    }
  }
  list$ = new BehaviorSubject<any[]>([]);
  employees: employee[] = []
  constructor() { }
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any[] = ELEMENT_DATA;

  private setTabel() {

  }

}