import { Component } from '@angular/core';
import { combineLatest, forkJoin, from, interval, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-combainlatest-fork-join',
  templateUrl: './combainlatest-fork-join.component.html',
  styleUrls: ['./combainlatest-fork-join.component.css']
})
export class CombainlatestForkJoinComponent {

  doCombainLatest() {

    /*
    used to get the multiple observables latest value into single observable as array or object

    before producing first combained output it will wait to get all the source observable's first value

    if any one the source observable from multiple source observable emits a observable means
    it will take that latest value and conbain it with another observable's latest value,
    will produce the combained output
    */
    const obs1 = from(['a','b','c','d']);
    const obs2 = of(1,2,3,4);
    const obs3 = interval(3000).pipe(take(2));
    const obs4 = timer(2000);

    combineLatest([obs1,obs2,obs3,obs4]).subscribe((res) => {
      console.log(res);

    })
  }

  doForkJoin() {

    /*
    used to get the multiple observables latest value into single observable as array or object
    it will wait all the observable to complete, only then it emit theirs latest value for one time.
    */

    const obs1 = from(['a','b','c','d']);
    const obs2 = of(1,2,3,4);
    const obs3 = interval(3000).pipe(take(2));
    const obs4 = timer(2000);

    forkJoin([obs1,obs2,obs3,obs4]).subscribe((res) => {
      console.log(res);

    })

  }

}
