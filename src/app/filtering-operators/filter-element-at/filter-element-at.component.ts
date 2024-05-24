import { Component } from '@angular/core';
import { elementAt, filter, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-filter-element-at',
  templateUrl: './filter-element-at.component.html',
  styleUrls: ['./filter-element-at.component.css']
})
export class FilterElementAtComponent {

  doFilter() {

    /*
    It emits values when the value pass the given predicate function.
    */

    const source = from([
      { name: 'Jon', age: 31 },
      { name: 'Bon', age: 25 },
      { name: 'Don', age: 27 },
      { name: 'Con', age: 30 }
    ]);

    let result = source.pipe(filter((val) => val.age < 30));
    result.subscribe((res) => console.log(res));

  }

  doElementAt() {

    /*
    It is used to get specfic element alone from source observable by using its index
    it only returns one specifed element based on specifed index.
    */

    of(1,2,3,4,5).pipe(elementAt(2)).subscribe((res) => console.log(res));

    const obs = fromEvent(document, 'click');
    obs.pipe(elementAt(2)).subscribe((res) => console.log(res));

  }

}
