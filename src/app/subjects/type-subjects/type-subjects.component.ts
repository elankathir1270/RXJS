import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-type-subjects',
  templateUrl: './type-subjects.component.html',
  styleUrls: ['./type-subjects.component.css']
})
export class TypeSubjectsComponent {

  doBehaviourSub() {

    /*
    It holds the initial value, If no new value is emitted means, it will pass initial value
    to new subscriber.
    If any value is emitted means it will pass latest value to new subscriber.
    */

    const behaviourSubject = new BehaviorSubject<number>(100);

    behaviourSubject.subscribe((res) => console.log("subscriber1 "+res));

    behaviourSubject.next(1000);

    behaviourSubject.subscribe((res) => console.log("subscriber2 "+res));


  }

  doReplaySub() {

    /*
    replay subject replays old values to new subscribers
    it will collect all the emitted values in buffer, we can specify the buffer size
    when the new subscribers comes it will emit collected items based on the buffer size.
    */

    const replaySubject = new ReplaySubject(2);

    replaySubject.next("a");
    replaySubject.next("b");
    replaySubject.next("c");
    replaySubject.next("d");

    replaySubject.subscribe((res) => console.log("subscriber1 "+res));

    replaySubject.next("e");

    replaySubject.subscribe((res) => console.log("subscriber2 "+res));

    replaySubject.next("f");
  }

  doAsyncSub() {

    /*
    async subject will only pass last emitted value to all its subscribers
    once the complete method triggers.
    */
    const asyncSubject = new AsyncSubject();

    asyncSubject.next(100);
    asyncSubject.next(200);

    asyncSubject.subscribe((res) => console.log("subscriber1 "+res));

    asyncSubject.next(300);
    asyncSubject.complete();

    asyncSubject.subscribe((res) => console.log("subscriber2 "+res));

  }

}
