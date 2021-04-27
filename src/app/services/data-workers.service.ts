import { Injectable } from '@angular/core';
import {Workers} from '../types/classes';

@Injectable({
  providedIn: 'root'
})
export class DataWorkersService {
  dataSource: Workers[] = [];

  constructor() {
    this.getWorkers();
  }

  getWorkers(): void {
    if (localStorage.getItem('workers') === null) {
      this.dataSource = [];
    } else {
      this.dataSource = JSON.parse(localStorage.getItem('workers'));
    }
  }

  addWorker(data): void {
    this.dataSource = [...this.dataSource, data];
    localStorage.setItem('workers', JSON.stringify(this.dataSource));
  }

}
