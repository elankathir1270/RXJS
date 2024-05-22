import { Component } from '@angular/core';
import { fromEvent, interval, of, timer } from 'rxjs';
import { audit, debounce, debounceTime, map, take, throttle, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})

export class DebounceComponent {



  checkDebounce() {

   const subscribe$ =  interval(1000).pipe(debounce((val) => timer(val * 200))); //0,1,2,3,4

   subscribe$.subscribe(res => console.log(res));

  // const value = of('one', 'two', 'three', 'display');

  // value.pipe(debounce(() => timer(1000))).subscribe((val) => console.log(val));

  }

  getInputValue() {

    const searchBox = document.getElementById('search');

    const keyUpEvent$ = fromEvent(searchBox, 'keyup')

    keyUpEvent$.pipe(map((event : any) => event.target.value), debounceTime(3000)).subscribe((res) => console.log(res));
  }



  doThrottle() {

    interval(1000).pipe(throttle(() => interval(2000))).subscribe((res) => console.log(res));
  }

  doThrottleTime() {

    let click = fromEvent(document, 'click');

    click.pipe(throttleTime(2000)).subscribe((res) => console.log(res));
  }

  doAudit() {
    interval(1000).pipe(audit(() => interval(2000))).subscribe((res) => console.log(res));
  }

}









