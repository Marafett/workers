import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataWorkersService} from '../../services/data-workers.service';
import {Workers} from '../../types/classes';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {
  form: FormGroup;

  constructor(public dataService: DataWorkersService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      gender: new FormControl(''),
      age: new FormControl(''),
      position: new FormControl(''),
      experience: new FormControl('')
    });
  }

  submit(): void {
    const newWorker = new Workers(this.form.value);
    this.dataService.addWorker(newWorker);
    this.form.reset();
  }
}
