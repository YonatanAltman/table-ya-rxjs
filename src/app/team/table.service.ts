import { Injectable } from '@angular/core';
import { employee } from '../model/model';
import { BehaviorSubject } from 'rxjs';
import { WindColumn, WindTableData, columnTypes } from '../table/table.model';
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
  columns: WindColumn[] = [
    { columnDef: 'id', type: columnTypes.column, cell: (row) => `${row['id']}`, style: (row) => `some_class`, },
    { columnDef: 'firstName', type: columnTypes.column, cell: (row) => `${row['firstName']}`, style: (row) => `some_class`, },
    { columnDef: 'lastName', type: columnTypes.column, cell: (row) => `${row['lastName']}`, style: (row) => `some_class`, },
    { columnDef: 'email', type: columnTypes.column, cell: (row) => `${row['email']}`, style: (row) => `some_class`, },
  ];
  list$ = new BehaviorSubject<any[]>([]);
  employees: employee[] = []
  constructor() { }


  public setItems(items) {
    this.list$.next(items);
  }

}
// id?: string;
//   firstName?: string;
//   lastName?: string;
//   email?: string;