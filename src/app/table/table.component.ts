import { Component, OnInit, Input, forwardRef, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { WindTableData } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selection = new SelectionModel<any>(true, []);
  currentRow: any;

  pageSizeOptions = [5, 10, 20];
  items: Array<any> = [];
  @Input() tableData: WindTableData;
  title = {
    filter: 'type value to filter',
    tooltipClear: 'clear filter',
  }
  column = {
    select: 'select',
    action: 'action'
  }
  filter: string;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {

  }
  ngOnInit() {
    this.tableData.items.subscribe(items => {
    this.SetDataSource(items);

    })
  }
  @Output() SelectedRow = new EventEmitter();
  @Output() ActionRow = new EventEmitter();
  displayedColumns: string[];
  dataSource: any;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
  OnSelectedRow(row) {

    this.SendRows();
  }
  public SetDataSource(items) {
    this.pageSizeOptions = this.tableData.pageSizeOptions;
    this.dataSource = new MatTableDataSource(items);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.selection = new SelectionModel(this.tableData.isMulti, []);
    console.log(this.dataSource);
    console.log(this.tableData);

    this.displayedColumns = this.tableData.columns.map(c => c.columnDef).reverse();
    let column = this.column.select;
    if (this.tableData.icon)
      column = this.column.action;

    this.displayedColumns.push(column);
    // <= First
    let display = this.displayedColumns.reverse();

    //display.push('action');// <= Last
    this.displayedColumns = display;

  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    this.SendRows();
  }
  SendRows() {
    this.SelectedRow.emit(this.selection.selected);
  }
  action(action, element) {

    this.ActionRow.emit(element);

  }
}
