import { Component } from '@angular/core';
import { Subject, filter, interval, skip, skipLast, skipUntil, skipWhile, take } from 'rxjs';

@Component({
  selector: 'app-skip-series',
  templateUrl: './skip-series.component.html',
  styleUrls: ['./skip-series.component.css']
})
export class SkipSeriesComponent {

  doSkip() {
    /*
    Skip allows you to ignore the first emissions from the source observable
    based on the specifed numbers.
    */
    //interval(1000).pipe(skip(5),take(5)).subscribe((res) => console.log(res));

    const obs = interval(1000).pipe(take(11));

    obs.pipe(skip(5),filter((val) => val % 2 == 0)).subscribe((val) => console.log(val))
  }

  doSkipLast() {

    /*
    Its same like skip only diffrence is it ignores last emissions from the source observables
    */

    interval(1000).pipe(take(10),skipLast(4)).subscribe((res) => console.log(res));
  }

  doSkipWhile() {

    /*
    skip emitted value from source observable untill the given expression is false
    */

    const obs = interval(1000).pipe(take(11));

    obs.pipe(skipWhile((val) => val < 5)).subscribe((res) => console.log(res));
  }

  doSkipUntil() {

    /*
    It skips emitted value from the source observable till it get a notification message from
    second observable like subject.
    */

    const skipTrigger = new Subject<void>();

    const obs = interval(1000).pipe(take(11));

    obs.pipe(skipUntil(skipTrigger)).subscribe((res) => console.log(res));

    setTimeout(() => {
      skipTrigger.next();
    },5000)
  }

}
