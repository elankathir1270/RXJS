import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageTaskService {

  // manageTask: EventEmitter<string> = new EventEmitter<string>();
  manageTask = new Subject<string>();

  constructor() { }

  addNewTask(task: string) {
    this.manageTask.next(task);
  }
}
