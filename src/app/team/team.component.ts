import { Component, OnInit } from '@angular/core';
import {TableService} from './table.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers:[TableService]
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}