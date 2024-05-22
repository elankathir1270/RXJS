import { Component } from '@angular/core';
import { Subject, filter, interval, skip, skipUntil, take } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent {

  doSkipUntil() {

    const trgSubscribe = new Subject<void>();

    interval(1000).pipe(skipUntil(trgSubscribe),take(10)).subscribe((res) => {
      console.log(res);

    })

    setTimeout(() => {
      trgSubscribe.next();
    },5000)

  }

  doSkip() {
    const obs = interval(1000).pipe(take(11));

    obs.pipe(skip(5),filter((val) => val % 2 == 0)).subscribe((val) => console.log(val))
  }

}
