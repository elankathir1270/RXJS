import { Component } from '@angular/core';
import { every, find, findIndex, from, of } from 'rxjs';

@Component({
  selector: 'app-every-find-find-index',
  templateUrl: './every-find-find-index.component.html',
  styleUrls: ['./every-find-find-index.component.css']
})
export class EveryFindFindIndexComponent {

  doFind() {
  /*
  It emits only one value from source observable, which passes the predicate function;
  */

    const source = from([
      { name: 'Jon', age: 31 },
      { name: 'Bon', age: 25 },
      { name: 'Don', age: 27 },
      { name: 'Con', age: 30 }
    ]);

    source.pipe(find((val) => val.name === "Don")).subscribe((res) => console.log(res));
  }

  doEvery() {

    /*
    It returns boolean value, every emitting value from the source observable should pass the predicate
    function.
    */
    const obs = of(1,2,3,4,5);
    obs.pipe(every((val) => val > 6)).subscribe((res) => console.log(res));
  }

  doFindIndex() {

    /*
    It emits the index of first value from the source observable
    which satisfies the give condition first.
    */
    const source = from([
      { name: 'Jon', age: 31 },
      { name: 'Bon', age: 25 },
      { name: 'Don', age: 27 },
      { name: 'Con', age: 30 }
    ]);

    source.pipe(findIndex((val) => val.age == 25)).subscribe((res) => console.log(res));
  }

}
