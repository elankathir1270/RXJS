import { Component } from '@angular/core';
import {
  audit,
  debounce,
  debounceTime,
  fromEvent,
  interval,
  map,
  throttleTime,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-audit-debounce-throttle',
  templateUrl: './audit-debounce-throttle.component.html',
  styleUrls: ['./audit-debounce-throttle.component.css'],
})
export class AuditDebounceThrottleComponent {
  ngOnInit() {
    /*
      It emits values only after specified duration completes,
      it ignores values if it emits within the duration and
      resets the timer whenever the new value comes in.
      Its useful in search bar to listen users complete thoughts.
    */
    const searchEl = document.getElementById('search');

    let obs = fromEvent(searchEl, 'input');
    //debounceTime

    obs
      .pipe(
        map((el: any) => el.target.value),
        debounceTime(2000)
      )
      .subscribe((res) => console.log(res));

    //debounce

    /*
    It is same like debounceTime, difference is unlike debounceTime(300) fixed delay,
    here we can specify dynamic delay based on the value like timer(term.length * 100) or any other logic.

    short word → short delay
    long word → longer delay

    You cannot do this with debounceTime.
    */
    obs.pipe(map((el : any) => el.target.value), debounce((term) => timer(term.length * 100)))
    .subscribe((res) => console.log(res));
  }

  doAudit() {
    /*
    Its same like debounce it emits value only after specified duration
    difference is it wont reset timer, you get values every time specified duration completes
    */
    interval(1000)
      .pipe(audit(() => interval(2000)))
      .subscribe((res) => console.log(res));
  }

  doThrottleTime() {
    /*
    Emits the first value, then ignores subsequent values for a fixed time.
    throttleTime is same like audit, emits value only after specified duration completes,
    difference is it can get initial value or last value or both values based on the
    specified duration, by using leading and trailing properties.
    */
    const obs = fromEvent(document, 'click');

    obs.pipe(throttleTime(2000)).subscribe((res) => console.log(res));
  }
}
