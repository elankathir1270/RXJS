import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  //createTask: EventEmitter<string> = new EventEmitter<string>();
  createTask = new Subject<string>();

  constructor() { }

  onCreateTask(value : string) {
    this.createTask.next(value)
  }
}
