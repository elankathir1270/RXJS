import { Component } from '@angular/core';
import { debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, from, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.css']
})
export class DistinctComponent {

  distinct() {
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

    from(details).pipe(distinct((d) => d.id)).subscribe((res) => console.log(res));
  }

  doDistUntilKeyChange() {

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

    from(details).pipe(distinctUntilKeyChanged('name')).subscribe((res) => {
      console.log(res);

    })

    // from(details).pipe(distinctUntilKeyChanged('name',(pre,cur) => {
    //   return pre.substring(0,3) === cur.substring(0,3)
    // })).subscribe((res) => {
    //   console.log(res);

    // })

  }

  ngOnInit() {
    const searchEvent = document.getElementById('search');

    let observable = fromEvent(searchEvent, 'input');

    observable.pipe(
      map((event: any) => event.target.value),debounceTime(2000),distinctUntilChanged()).subscribe( {
        next: function(val) {
          console.log(val);

        }

      })

  }

}
