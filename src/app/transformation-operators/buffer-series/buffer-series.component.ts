import { Component } from '@angular/core';
import { Subject, buffer, bufferCount, bufferTime, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-series',
  templateUrl: './buffer-series.component.html',
  styleUrls: ['./buffer-series.component.css']
})
export class BufferSeriesComponent {

  doBuffer() {
    /*
      It's used to collect the values from souce observable and process them all together
      untill the second observable send notification message to stop buffer.
      then emit the collected values as array.
    */
    const bufferTrigger = new Subject<void>();

    interval(1000).pipe(buffer(bufferTrigger)).subscribe((res) => {
      console.log(res);
    })

    setInterval(() => {
      bufferTrigger.next();
    },5000)
  }

  doBufferCount() {

    interval(1000).pipe(bufferCount(5)).subscribe((res) => console.log(res));
  }

  doBufferTime() {

    interval(1000).pipe(bufferTime(3000)).subscribe((res) => console.log(res));
  }

}
