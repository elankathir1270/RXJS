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
    SkipComponent
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
