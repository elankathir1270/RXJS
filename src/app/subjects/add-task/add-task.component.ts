import { Component, inject } from '@angular/core';
import { ManageTaskService } from '../manage-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  taskName: string = '';
  manageTask : ManageTaskService = inject(ManageTaskService);

  createTask() {
    this.manageTask.addNewTask(this.taskName);
  }

}
