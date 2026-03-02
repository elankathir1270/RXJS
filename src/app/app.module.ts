import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';


import { MapComponent } from './map/map.component';

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
import { TapDelayToArrayComponent } from './utility-operators/tap-delay-to-array/tap-delay-to-array.component';
import { EveryFindFindIndexComponent } from './conditional-boolean-operators/every-find-find-index/every-find-find-index.component';
import { SubjectsComponent } from './subjects/subjects/subjects.component';
import { ShowTaskComponent } from './subjects/show-task/show-task.component';
import { AddTaskComponent } from './subjects/add-task/add-task.component';
import { TypeSubjectsComponent } from './subjects/type-subjects/type-subjects.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    MapComponent,

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
    FilterElementAtComponent,
    TapDelayToArrayComponent,
    EveryFindFindIndexComponent,
    SubjectsComponent,
    ShowTaskComponent,
    AddTaskComponent,
    TypeSubjectsComponent
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
