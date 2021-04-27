import { Component, OnInit } from '@angular/core';
import {DataWorkersService} from '../../services/data-workers.service';

@Component({
  selector: 'app-table-worker',
  templateUrl: './table-worker.component.html',
  styleUrls: ['./table-worker.component.css']
})
export class TableWorkerComponent implements OnInit {
  displayedColumns: string[] = ['gender', 'age', 'position', 'experience'];

  constructor(public dataService: DataWorkersService) { }

  ngOnInit(): void {
  }

}
