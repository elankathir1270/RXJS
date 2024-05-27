import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {

  ngOnInit() {
    //AJAX call
    const obs = ajax('https://randomuser.me/api/');

    const subject = new Subject();

    subject.subscribe((res => console.log(res)));
    subject.subscribe((res => console.log(res)));
    subject.subscribe((res => console.log(res)));

    obs.subscribe(subject);

    /*
    Here Subject using as consumer
    subject receives what ajax method returns(observable) and converts it
    to subjects, then pass values to all its subscribers;
    */
  }

  observables() {
    const obs = new Observable((val) => val.next(Math.random()));

    // obs.subscribe((res) => console.log("subscriber1 "+ res));
    // obs.subscribe((res) => console.log("subscriber2 "+ res));
    // obs.subscribe((res) => console.log("subscriber3 "+ res));
  }

  subjects() {

    const subject = new Subject();

    // subject.subscribe((res) => console.log("subscriber1 "+res));
    // subject.subscribe((res) => console.log("subscriber2 "+res));
    // subject.subscribe((res) => console.log("subscriber3 "+res));

    subject.next(Math.random());

  }

}
