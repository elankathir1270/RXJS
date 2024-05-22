import { Component } from '@angular/core';
import { concat, fromEvent, interval, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge-concat',
  templateUrl: './merge-concat.component.html',
  styleUrls: ['./merge-concat.component.css']
})
export class MergeConcatComponent {

  doMerge() {

    /*
    this operator used to combain multiple observables, concurrently emit observables
    into a single stream, it does not wait for one observable compleation to subscribe
    another one. It emit the result as they come.
     */

    const obs1 = interval(1000).pipe(take(4));
    const obs2 = fromEvent(document, 'click');

    const mergObs = merge(obs1,obs2)

    mergObs.subscribe((res) => console.log(res));


    // const obs1 = interval(1000).pipe(take(4));
    // const obs2 = interval(2000).pipe(take(4));

    // const mergObs = concat(obs1,obs2)

    // mergObs.subscribe((res) => console.log(res));


  }

  doConcat() {

    /*
    this operator used to combain multiple observables, sequentially emit observables
    into a single stream, it wont subscribe another observable untill it compleate one.
    It emit the result in order.
     */

    const obs1 = interval(1000).pipe(take(4));
    const obs2 = fromEvent(document, 'click');

    const concatObs = concat(obs1,obs2)

    concatObs.subscribe((res) => console.log(res));

     //const obs1 = interval(1000).pipe(take(4));
    // const obs2 = interval(2000).pipe(take(4));

    // const concatObs = concat(obs1,obs2)

    // concatObs.subscribe((res) => console.log(res));

  }

}
