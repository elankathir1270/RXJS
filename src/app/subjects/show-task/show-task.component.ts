import { Component, inject } from '@angular/core';
import { ManageTaskService } from '../manage-task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {

  tasks: string[] = ["task1","task2","task3","task4"];
  manageTasks: ManageTaskService = inject(ManageTaskService);

  ngOnInit() {
    this.manageTasks.manageTask.subscribe((res) => {
      this.tasks.push(res);
    })
  }


}
