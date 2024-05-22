import { Component } from '@angular/core';
import { Subject, buffer, bufferCount, bufferTime, delay, interval, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent {

  buffer() {
    const bufferTriggers$ = new Subject<void>();

    interval(1000).pipe(buffer(bufferTriggers$)).subscribe((val) => console.log(val));


    setInterval(()=> {
      bufferTriggers$.next();
    },5000);
  }

  bufferCount() {
    interval(1000).pipe(bufferTime(3000)).subscribe((val) => console.log(val));
  }

  doDelay() {
    const obs = of(1,2,3);

    //obs.pipe(delay(2000)).subscribe((res) => console.log(res));
    obs.pipe(mergeMap((val) => of(val).pipe(delay(val * 1000)))).subscribe((res) => {
      console.log(res);

    })

  }

}
