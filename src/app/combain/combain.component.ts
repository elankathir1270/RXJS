import { Component } from '@angular/core';
import { combineLatest, concat, forkJoin, from, fromEvent, interval, merge, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-combain',
  templateUrl: './combain.component.html',
  styleUrls: ['./combain.component.css']
})
export class CombainComponent {

  doCombain() {
    let obs1 = interval(1000);
    let obs2 = interval(3000);

    combineLatest([obs1,obs2]).subscribe((data) => console.log(data));

  }

  doMerge() {
    let obs1 = interval(1000).pipe(take(4));
    let obs2 = fromEvent(document, 'click');

    merge(obs1,obs2).subscribe((res) => console.log(res));

  }

  doConcat() {
    let obs1 = interval(1000).pipe(take(4));
    let obs2 = fromEvent(document, 'click');

    concat(obs1,obs2).subscribe((res) => console.log(res));

  }

  doForkJoin() {
    forkJoin([
      of(1,2,3,4),
      from(["a","b","c"]),
      timer(3000),
      ["r","j"]
    ]).subscribe((val) => console.log(val));
  }



}
