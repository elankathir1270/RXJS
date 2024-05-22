import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

  data: number[] = [];


  myObsesrvable = new Observable((observer) => {
    observer.next([1,2,3,4,5]);
  })

  getAsyncData() {
    this.myObsesrvable.subscribe({
      next: (data : any) => {
        this.data = data
      }
    })
  }

}
