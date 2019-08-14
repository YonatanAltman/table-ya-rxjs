import { Observable } from 'rxjs';
export interface WindTableData {
  columns: WindColumn[];
  items: Observable<any[]>;
  isMulti?: boolean;
  pageSizeOptions?: number[];
  icon?: string;
  tableId?: string;
  title?: string;
}
export enum columnTypes {
  action,
  column
}
export interface WindColumn {
  /**the property name from the row.<columnDef> */
  columnDef: string;
  header: string;
  /**a function to get the currect value to every column '`(row) => '${row.<columnDef>}'`*/
  cell: any;
  /**a function to get the currect style to every column '`(row) => '${class_name}'`*/
  style?: any;
  type?: columnTypes;

}

