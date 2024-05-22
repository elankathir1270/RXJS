import { Component } from '@angular/core';
import { concatMap, delay, exhaustMap, forkJoin, from, fromEvent, interval, map, mergeMap, of, switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient,} from '@angular/common/http'


@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent {

  input1: string;
  input2: string;
  input3: string;
  combainVal: string

  constructor(private http: HttpClient) {}

  showValue() {
    let obs1 = new Observable((val) => val.next(this.input1));
    let obs2 = new Observable((val) => val.next(this.input2));


    //obs1.pipe(map((val1) => val1)).subscribe((val1: string) => this.combainVal = val1)
    //obs1.subscribe((val1: string) => this.combainVal = val1)
    //obs2.subscribe((val2: string) => this.combainVal = val2)

    obs1.pipe(mergeMap((event1) => {
      return obs2.pipe(map((event2) => event1 + " " + event2))
    })).subscribe((combainVal) => this.combainVal = combainVal)

    ///////////////////////////////////////////////////////////////////

   //fromEvent(document, 'click').pipe(switchMap(() => interval(1000))).subscribe((res) => console.log(res));

   }

  showHttpReq() {
    of('photos', 'posts', 'users').pipe(exhaustMap((patchItem) => { //outer observable
      const url = 'https://jsonplaceholder.typicode.com/'+patchItem;
      return this.http.get(url,{ observe: 'body' }) ////inner observable
    })).subscribe((data) => console.log(data));

    // const endpoints = of([1,2,3,4]).pipe(map((val) => `https://jsonplaceholder.typicode.com/posts/${val}` ));

    // forkJoin(endpoints.pipe(map((url) => this.http.get(url)))).subscribe((data) => console.log(data));
  }

  doMergeMap() {
    function getData(arg : string){
      return of(arg + "srkj").pipe(delay(2000))
    }

    const stream = from(["aa","bb","cc"]);

    stream.pipe(switchMap((val) => getData(val))).subscribe((res) => {
      console.log(res);

    })
  }



}



