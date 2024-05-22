import { Component } from '@angular/core';
import { Subject, filter, interval, of, take, takeLast, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent {

  unsubscribe$ = new Subject<void>();

  emitObservable() {
    interval(1000).pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      console.log(data);

    })

    setTimeout(() => this.unsubscribe$.next(),10000)
  }

  stopObservable(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  doTake(){
    interval(1000).pipe(take((5))).subscribe((data) => console.log(data));
  }

  doTakeWhile() {
    const obs = of(3,3,3,4,3,5,6,7,3,8,9,3,10,11)

    obs.pipe(takeWhile((v) => v === 3 )).subscribe((res) => {
      console.log(res);

    })

    obs.pipe(filter((v) => v === 3)).subscribe((res) => {
      console.log(res);
    })

  }

  doTakeLast() {
    const obs = of(3,3,3,4,3,5,6,7,3,8,9,3,10,11);

    interval(1000).pipe(take(5),takeLast(2)).subscribe((res) => console.log(res));
    //obs.pipe(takeLast(3)).subscribe((res) => console.log(res));
  }

}
