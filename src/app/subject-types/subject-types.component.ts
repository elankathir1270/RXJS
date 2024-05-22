import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-types',
  templateUrl: './subject-types.component.html',
  styleUrls: ['./subject-types.component.css']
})
export class SubjectTypesComponent {


  ngOnInit() {
    // const subject = new Subject();

    // subject.next(100);
    // subject.next(200);
    // subject.next(300);

    // subject.subscribe((data) => {console.log("subscriber1 : "+data) });//1000,2000,3000
    // subject.subscribe((data) => {console.log("subscriber2 : "+data) });//1000,2000,3000

    // subject.next(1000);
    // subject.next(2000);

    // subject.subscribe((data) => {console.log("subscriber3 : "+data) });//3000

    // subject.next(3000);

    //note
    //naturally subject will provide data to its subscribers, only subscribers subscribe to subject before it is emitting data


    const behaviorSub = new BehaviorSubject<number>(100);

    behaviorSub.subscribe((data) => {console.log("subscriber1 : "+ data)});//100,2021,2023
    //behaviorSub.subscribe((data) => {console.log("subscriber2 : "+ data)});//100,2021,2023

    behaviorSub.next(2021);

    //behaviorSub.subscribe((data) => {console.log("subscriber3 : "+ data)});//2021/2023

    //behaviorSub.next(2023);

    // const replaySub = new ReplaySubject(2);

    // replaySub.next(100);
    // replaySub.next(200);
    // replaySub.next(300);

    // replaySub.subscribe((data) => {console.log("subscriber1 : "+data) });//200,300,1000,2000,3000
    // replaySub.subscribe((data) => {console.log("subscriber2 : "+data) });//200,300,1000,2000,3000

    // replaySub.next(1000);
    // replaySub.next(2000);

    // replaySub.subscribe((data) => {console.log("subscriber3 : "+data) });//1000,2000,3000

    // replaySub.next(3000);

    //note
    // when ReplaySubject is using all the subscribers will receive old emitted values

    // const asyncSub = new AsyncSubject();

    // asyncSub.next(100);
    // asyncSub.next(200);
    // asyncSub.next(300);

    // asyncSub.subscribe((data) => {console.log("subscriber1 : "+data) });
    // asyncSub.subscribe((data) => {console.log("subscriber2 : "+data) });

    // asyncSub.next(1000);
    // asyncSub.next(2000);
    // asyncSub.complete();

    // asyncSub.subscribe((data) => {console.log("subscriber3 : "+data) });

    // asyncSub.next(3000);




  }

}
