import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, delay, exhaustMap, from, interval, mapTo, mergeMap, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-map-series',
  templateUrl: './map-series.component.html',
  styleUrls: ['./map-series.component.css']
})
export class MapSeriesComponent {


  constructor(private http: HttpClient) {}

  doMergeMap() {

    /*
      It takes an observable map that observable into another observable
      then it subscribes all mapped observable concurrently then
      it emits the observables in single stream as the arrive/out of order.
    */
    function getData(arg :string) {
      return of(arg + " srk").pipe(delay(2000));
    }

    const stream = from(["a","b","c"]);

    stream.pipe(mergeMap((val) => getData(val))).subscribe((res) => {
      console.log(res);

    })

    of('photos', 'posts', 'users').pipe(mergeMap((patchVal) => {
      const url = `https://jsonplaceholder.typicode.com/${patchVal}`
      return this.http.get(url,{ observe: 'body' })
    })).subscribe((data) => console.log(data));

  }

  doConcatMap() {

    /*
    It takes an observable map that observable into another observable
    then it subscribes all mapped observable sequentialy, it will wait to compleate
    a subscription till then it wont subscribe next observable.
    then it emits the observable in single stream in order.
    */

    of('photos', 'posts', 'users').pipe(concatMap((patchVal) => {
      const url = `https://jsonplaceholder.typicode.com/${patchVal}`
      return this.http.get(url,{ observe: 'body' })
    })).subscribe((data) => console.log(data));

    function getData(arg :string) {
      return of(arg + " srk").pipe(delay(2000));
    }

    const stream = from(["a","b","c"]);

    stream.pipe(concatMap((val) => getData(val))).subscribe((res) => {
      console.log(res);

    })

  }

  doSwitchMap() {

    /*
    It takes an obsesrvable map that observable into another observable
    then it subscribes all the mapped observable, but this only cares about the
    latest one, ignores rest of the observables.
    it does not wait for the previous call to compleate before making new one.
    */

   function getData(arg :string) {
    return of(arg + " srk").pipe(delay(2000));
   }

  const stream = from(["a","b","c"])

  stream.pipe(switchMap((val) => getData(val))).subscribe((res) => {
    console.log(res);

  })

  of('photos', 'posts', 'users').pipe(switchMap((patchVal) => {
    const url = `https://jsonplaceholder.typicode.com/${patchVal}`

    return this.http.get(url,{ observe: 'body' })
  })).subscribe((data) => console.log(data));


  }


  doExhausthMap() {

    /*
    It takes an observable map that observable into another observable
    then it subscribes all the mapped observable, but this only cares about
    first observable, ignores subsequent requests untill it completes first one.
    when the first call completely over only then it concentrates next one.
    */

    function getData(arg :string) {
     return of(arg + " srk").pipe(delay(2000));
    }

   const stream = from(["a","b","c"])

   stream.pipe(exhaustMap((val) => getData(val))).subscribe((res) => {
     console.log(res);

   })

   of('photos', 'posts', 'users').pipe(exhaustMap((patchVal) => {
     const url = `https://jsonplaceholder.typicode.com/${patchVal}`

     return this.http.get(url,{ observe: 'body' })
   })).subscribe((data) => console.log(data));


   }

   doMapTo() {

    /*
    Emits the given constant value whenever the source observable emits a value.
    */

    const obs = interval(1000).pipe(take(3));

    obs.pipe(mapTo("srk")).subscribe((res) => console.log(res));
   }

}
