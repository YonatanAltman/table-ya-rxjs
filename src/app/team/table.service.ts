import { Injectable } from '@angular/core';
import { employee } from '../model/model';
import { BehaviorSubject } from 'rxjs';
import { WindColumn, WindTableData } from '../table/table.model';
@Injectable()
export class TableService {
  public get tableData(): WindTableData {
    const data: WindTableData = {
      columns: this.columns,
      items: this.list$.asObservable(),
      isMulti: true,
      pageSizeOptions: [5, 10, 20],
      tableId: 'employee',
      title: 'Team Members'


    };
    return data;
  }
  columns: WindColumn[] = [];
  list$ = new BehaviorSubject<any[]>([]);
  employees: employee[] = []
  constructor() { }
  

  private setTabel() {

  }

}