import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { NewSubTaskComponent } from './new-sub-task/new-sub-task.component';
import { ShowSubTaskComponent } from './show-sub-task/show-sub-task.component';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { SubjectTypesComponent } from './subject-types/subject-types.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { HttpClientModule } from '@angular/common/http';
import { TakeUntilComponent } from './take-until/take-until.component';
import { DebounceComponent } from './debounce/debounce.component';
import { BufferComponent } from './buffer/buffer.component';
import { DistinctComponent } from './distinct/distinct.component';
import { MapComponent } from './map/map.component';
import { CombainComponent } from './combain/combain.component';
import { PracticeComponent } from './practice/practice.component';
import { SkipComponent } from './skip/skip.component';
import { AjaxComponent } from './creation-operators/ajax/ajax.component';
import { OfFromComponent } from './creation-operators/of-from/of-from.component';
import { FromEventIntervalComponent } from './creation-operators/from-event-interval/from-event-interval.component';
import { RangeTimerIifComponent } from './creation-operators/range-timer-iif/range-timer-iif.component';
import { MergeConcatComponent } from './join-creation-operators/merge-concat/merge-concat.component';
import { CombainlatestForkJoinComponent } from './join-creation-operators/combainlatest-fork-join/combainlatest-fork-join.component';
import { BufferSeriesComponent } from './transformation-operators/buffer-series/buffer-series.component';
import { MapSeriesComponent } from './transformation-operators/map-series/map-series.component';
import { SkipSeriesComponent } from './filtering-operators/skip-series/skip-series.component';
import { TakeSeriesComponent } from './filtering-operators/take-series/take-series.component';
import { DistinctSeriesComponent } from './filtering-operators/distinct-series/distinct-series.component';
import { AuditDebounceThrottleComponent } from './filtering-operators/audit-debounce-throttle/audit-debounce-throttle.component';
import { FilterElementAtComponent } from './filtering-operators/filter-element-at/filter-element-at.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    NewSubTaskComponent,
    ShowSubTaskComponent,
    SubjectComponent,
    SubjectTypesComponent,
    MergeMapComponent,
    TakeUntilComponent,
    DebounceComponent,
    BufferComponent,
    DistinctComponent,
    MapComponent,
    CombainComponent,
    PracticeComponent,
    SkipComponent,
    AjaxComponent,
    OfFromComponent,
    FromEventIntervalComponent,
    RangeTimerIifComponent,
    MergeConcatComponent,
    CombainlatestForkJoinComponent,
    BufferSeriesComponent,
    MapSeriesComponent,
    SkipSeriesComponent,
    TakeSeriesComponent,
    DistinctSeriesComponent,
    AuditDebounceThrottleComponent,
    FilterElementAtComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
