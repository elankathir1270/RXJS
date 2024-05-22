import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {



  ngOnInit() {

     //AJAX CALL
    //  const data = ajax('https://randomuser.me/api/');
    //  const subject = new Subject()

    //  subject.subscribe((data) => console.log(data));
    //  subject.subscribe((data) => console.log(data));
    //  subject.subscribe((data) => console.log(data));

    //  data.subscribe(subject);
     //Here Subject using as consumer,
     //subject receives what ajax method returns(observables) and converts it to subjects
     //and passes values to all subscribers.



  }

  observables() {
    const obs = new Observable((val) => val.next(Math.random()))

    obs.subscribe((val) => console.log("Subscriber1 "+val));
    obs.subscribe((val) => console.log("Subscriber2 "+val));
    obs.subscribe((val) => console.log("Subscriber3 "+val));

  }

  subjects() {
    const sub = new Subject();

    sub.subscribe((val) => console.log("Subscriber1 "+val));
    sub.subscribe((val) => console.log("Subscriber2 "+val));
    sub.subscribe((val) => console.log("Subscriber3 "+val));

    sub.next(Math.random());
  }





}


