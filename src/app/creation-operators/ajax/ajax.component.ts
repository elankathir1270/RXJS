import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css'],
})
export class AjaxComponent {
  ngOnInit() {
    /*
    Ajax operator creates an observable from ajax request. Its used to make api call. we can perform all http request
    methods with this operator. It converts a normal ajax call into an observable and emits the data as an observable.
  */
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';

    //ajax.getJSON(postUrl).subscribe((res) => console.log(res));

    //object to remote api

    ajax({
      url: postUrl,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        header: 'srk',
      },
      body: {},
    }).subscribe((res) => console.log(res));
  }

  doAjax() {}
}
