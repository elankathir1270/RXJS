import { Component, inject } from '@angular/core';
import { TasksService } from '../Services/tasks.service';

@Component({
  selector: 'app-show-sub-task',
  templateUrl: './show-sub-task.component.html',
  styleUrls: ['./show-sub-task.component.css']
})
export class ShowSubTaskComponent {

  tasks: string[] = ['task1','task2','task3'];
  taskService: TasksService = inject(TasksService);


  ngOnInit() {
    this.taskService.createTask.subscribe((value) => {
      this.tasks.push(value);
    })
  }



}
