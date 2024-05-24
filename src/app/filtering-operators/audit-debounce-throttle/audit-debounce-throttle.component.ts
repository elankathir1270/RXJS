import { Component } from '@angular/core';
import { audit, debounceTime, fromEvent, interval, map, throttleTime } from 'rxjs';

@Component({
  selector: 'app-audit-debounce-throttle',
  templateUrl: './audit-debounce-throttle.component.html',
  styleUrls: ['./audit-debounce-throttle.component.css']
})
export class AuditDebounceThrottleComponent {

  ngOnInit() {

    /*
      It emits values only after specifed duration completes,
      it ignores values if it emits within the duration and
      resets the timer whenever the new value comes in.
      Its useful in search bar to listen users complete thoughts.
    */
    const searchEl = document.getElementById('search');

    let obs = fromEvent(searchEl,'input');

    obs.pipe(map((el:any) => el.target.value),debounceTime(2000)).subscribe((res) => console.log(res));

  }

  doAudit() {
    /*
    Its same like debounce it emits value only after specifed duration
    diffrence is it wont reset timer, you get values everytime specifed duration completes
    */
    interval(1000).pipe(audit(() => interval(2000))).subscribe((res) => console.log(res));
  }

  doThrottleTime() {
    /*
    throttleTime is same like audit, emits value only after specifed duration completes,
    diffrence is it can get initial value or last value or both values based on the
    specifed duration, by using leading and trailing properties.s
    */
    const obs = fromEvent(document, 'click');

    obs.pipe(throttleTime(2000)).subscribe((res) => console.log(res));
  }

}
