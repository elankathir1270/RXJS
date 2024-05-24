import { Component } from '@angular/core';
import { Subject, filter, interval, take, takeLast, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-series',
  templateUrl: './take-series.component.html',
  styleUrls: ['./take-series.component.css']
})
export class TakeSeriesComponent {

  doTake() {
    /*
    Take allows you to get the first emissions from the source observable
    based on the specifed numbers.
    */
    //interval(1000).pipe(take(5)).subscribe((res) => console.log(res));

    const obs = interval(1000).pipe(take(11));

    obs.pipe(filter((val) => val % 2 == 0)).subscribe((val) => console.log(val))
  }

  doTakeLast() {

    /*
    Its same like take only diffrence is it gets last emissions from the source observables
    */

    interval(1000).pipe(take(10),takeLast(4)).subscribe((res) => console.log(res));
  }

  doTakeWhile() {

    /*
    takes emitted value from source observable untill the given expression is false
    */

    const obs = interval(1000).pipe(take(11));

    obs.pipe(takeWhile((val) => val < 5)).subscribe((res) => console.log(res));
  }

  doTakeUntil() {

    /*
    It takes emitted value from the source observable till it get a notification message from
    second observable like subject.
    */

    const skipTrigger = new Subject<void>();

    const obs = interval(1000).pipe(take(11));

    obs.pipe(takeUntil(skipTrigger)).subscribe((res) => console.log(res));

    setTimeout(() => {
      skipTrigger.next();
    },5000)
  }

}
