import { Component } from '@angular/core';
import { Subject, combineLatest, concat, concatMap, debounceTime, delay, distinct, distinctUntilChanged, elementAt, exhaustMap, filter, find, findIndex, forkJoin, from, fromEvent, interval, map, merge, mergeMap, of, skipUntil, switchMap, take, takeUntil, throttle, throttleTime, timer } from 'rxjs';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  doMergeMap() {

    let obs = timer(1000,2000);
    obs.subscribe((res) => console.log(res));
  }



}
