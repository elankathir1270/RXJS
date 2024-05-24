import { Component } from '@angular/core';
import { debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, from, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-distinct-series',
  templateUrl: './distinct-series.component.html',
  styleUrls: ['./distinct-series.component.css']
})
export class DistinctSeriesComponent {


  doDistinct() {

    /*
      Emits only distinct value from all last emitted values
    */
    const obs = from(['a','b','c','a','a','b','e','m','t','e']);

    obs.pipe(distinct()).subscribe((res) => console.log(res));
  }

  ngOnInit() {

    /*
    It eliminates the value that are same as previous value, prevents the redundant processing
    it helps and ensure that emitted values are distinct and unique from previously emitted values.
    */
    const searchEl = document.getElementById("search");

    let obs = fromEvent(searchEl,"input");

    obs.pipe(map((event: any) => event.target.value),debounceTime(2000),distinctUntilChanged())
    .subscribe((res) => console.log(res));

  }

  doDistinctKey() {

    /*
    It eliminates specifed key value which is same as previous one,
    */

    const details = [
      {id: 1, name: "name1"},
      {id: 2, name: "name2"},
      {id: 2, name: "name2"},
      {id: 1, name: "name3"},
      {id: 3, name: "name3"},
      {id: 3, name: "name3"},
      {id: 1, name: "name3"},
      {id: 2, name: "name2"},
    ]

    let obs = from(details).pipe(distinctUntilKeyChanged('name')).subscribe((res) => console.log(res));

  }



}
