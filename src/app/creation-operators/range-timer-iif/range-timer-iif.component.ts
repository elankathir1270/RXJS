import { Component } from '@angular/core';
import { fromEvent, iif, interval, map, mergeMap, of, range, take, timer } from 'rxjs';

@Component({
  selector: 'app-range-timer-iif',
  templateUrl: './range-timer-iif.component.html',
  styleUrls: ['./range-timer-iif.component.css']
})
export class RangeTimerIifComponent {

  doRange() {

    /*
    creates an onservable that emits sequential numbers within a specifed range
     */
    range(5,10).subscribe((res) => console.log(res));
  }

  doTimer() {
    /*
    its used to create an observable that emits a single value after the specifed period
    of time, optionally it takes second argument it makes timer to emit values at every specifed
    time intervals. it act like setTimeout and setInterval functions
    */

    timer(2000,1000).subscribe((res) => console.log(res));

    // const obs = timer(1000,1000).pipe(take(3));

    // document.addEventListener('click', () => {

    //   obs.subscribe((res) => console.log(res));
    // })

  }

  doIif() {

    /*
      iff operator conditionally selects which observable to subscribe based on boolean value
      it takes three arguments a conditional function which returns boolean,
      source obs1, source obs2.
     */
    const obs1 = of('a');
    const obs2 = of('b');

    // let trigger: boolean;

    // iif(() => trigger,obs1,obs2).subscribe((res) => {
    //   console.log(res);

    // })

    // setTimeout(function(){
    //   trigger = true

    //   iif(() => trigger,obs1,obs2).subscribe((res) => {
    //     console.log(res);
    //   })

    // }, 3000);


    interval(1000).pipe(mergeMap((val) => iif(() => val % 4 === 0, obs1,obs2))).subscribe((res) => {
      console.log(res);

    })


  }

}
