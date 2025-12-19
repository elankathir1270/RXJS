import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, map } from 'rxjs';

@Component({
  selector: 'app-from-event-interval',
  templateUrl: './from-event-interval.component.html',
  styleUrls: ['./from-event-interval.component.css'],
})
export class FromEventIntervalComponent {
  @ViewChild('countBtn', { static: true }) countButton: ElementRef;
  count: number = 0;

  ngOnInit() {
    /*It creates observable from event emitting element from DOM
    it takes two arguments selected dom element and event type;
    */

    const inputEle = document.getElementById('search');
    let eventVal = fromEvent(inputEle, 'input').pipe(
      map((ele: any) => ele.target.value)
    );

    eventVal.subscribe((res) => console.log(res));
    this.handelCount();
  }

  //fromEvent
  handelCount() {
    const element = fromEvent(this.countButton.nativeElement, 'click');

    element.subscribe(() => {
      this.count++;
    });
  }

  doInterval() {
    /*
    It creates an observable that emits sequential numbers for every specified time interval;
    */

    interval(1000).subscribe((res) => console.log(res));
  }
}
