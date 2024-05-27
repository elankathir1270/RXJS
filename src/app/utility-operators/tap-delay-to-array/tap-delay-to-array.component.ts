import { Component } from '@angular/core';
import { delay, from, interval, of, range, take, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-tap-delay-to-array',
  templateUrl: './tap-delay-to-array.component.html',
  styleUrls: ['./tap-delay-to-array.component.css']
})
export class TapDelayToArrayComponent {

  doTap() {

    /*
    It is used to inspect values from source observable without altering them.
    we log the source observable to know the data flow.
    */
    const source = from([
      { name: 'Jon', age: 31 },
      { name: 'Bon', age: 25 },
      { name: 'Don', age: 27 },
      { name: 'Con', age: 30 }
    ]);

    source.pipe(tap((val) => console.log(val))).subscribe();
  }

  doDelay() {

    /*
    Delay operator postpones emitting data from the source observable.
    It does not change the value, it only changes the emission time.
    */
    const obs = interval(1000).pipe(take(5));
    const obs2 = range(0,5)

    obs2.pipe(delay(2000)).subscribe((res) => console.log(res));
  }

  doToArray() {

    /*
    It collects all the emissions from the source observable and make them as array
    when the source completes.
    */

    const obs = of("a","b","c","d","e");
    const obs2 = interval(1000).pipe(take(5));

    obs2.pipe(toArray()).subscribe((res) => console.log(res));
  }

}
