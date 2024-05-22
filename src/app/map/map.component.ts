import { Component } from '@angular/core';
import { Observable, elementAt, find, findIndex, fromEvent, iif, interval, map, mapTo, mergeMap, of, take, timer } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  doMap() {
    let data = of(2,4,6,8,10);
    data.pipe(map((val) => val * 10)).subscribe((res) => console.log(res));
    data.pipe(mapTo("a")).subscribe((res) => console.log(res));
  }

  doElementAt() {
    let data = of(2,4,6,8,10);
    data.pipe(elementAt(4)).subscribe((res) => console.log(res));
  }

  ngOnInit() {
    let click = fromEvent(document, 'click')

    click.pipe(elementAt(3)).subscribe((ele) => console.log(ele));
  }

  doFindIndex() {
    let data = of(2,4,12,6,8,10);

    data.pipe(findIndex((val) => val > 10)).subscribe((res) => console.log(res));
  }

  doFind() {
    let source = timer(0,5).pipe(take(4));

    source.pipe(find((val) => val > 1)).subscribe((res) => console.log(res));

  }

  doIif() {
    const obs1 = of("A");
    const obs2 = of("B");

    interval(1000)
    .pipe(mergeMap((val) => iif(() => val % 4 == 0 ,obs1,obs2))).subscribe((res) => {
      console.log(res);

    })


    // let subscribeTo :boolean;

    // const iifObs = iif(() => subscribeTo, of("first"),of("second"))

    // iifObs.subscribe((res) => console.log(res));

    // subscribeTo = true;

    // iifObs.subscribe((res) => console.log(res));

  }

}


