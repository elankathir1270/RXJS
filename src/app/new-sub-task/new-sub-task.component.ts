import { Component, inject } from '@angular/core';
import { TasksService } from '../Services/tasks.service';

@Component({
  selector: 'app-new-sub-task',
  templateUrl: './new-sub-task.component.html',
  styleUrls: ['./new-sub-task.component.css']
})
export class NewSubTaskComponent {

  newTask: string = '';
  taskService: TasksService = inject(TasksService);

  onCreateTask() {
    this.taskService.onCreateTask(this.newTask);
  }

}
