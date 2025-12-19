import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent {
  doOf() {
    // it takes n number of arguments, and converts the arguments as an observable sequence.

    of(1, 2, 3, 4, 5).subscribe((res) => console.log(res));
  }

  doFrom() {
    /*it takes single argument which is iterable like an array,
    and converts the arguments as an observable sequence.*/

    const arrayVal = ['a', 'b', 'c', 'd', 'e'];

    from(arrayVal).subscribe((res) => console.log(res));
  }
}
