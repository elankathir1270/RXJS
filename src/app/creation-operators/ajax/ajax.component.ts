import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent {

ngOnInit() {
  const postUrl = "https://jsonplaceholder.typicode.com/posts";

  //ajax.getJSON(postUrl).subscribe((res) => console.log(res));

  //object to remote api

  ajax({
    url: postUrl,
    method: 'GET',
    headers:{
      'Content-Type' : 'application/json',
      header: "srk"
    },
    body:{

    }
  }).subscribe((res) => console.log(res));


}

}
