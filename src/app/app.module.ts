import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { DoneComponent } from './components/done/done.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { FilterComponent } from './components/filter/filter.component';
import { StatsComponent } from './components/stats/stats.component';
import { TaskListElementComponent } from './components/task-list-element/task-list-element.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    ToDoComponent,
    DoneComponent,
    TaskInputComponent,
    FilterComponent,
    StatsComponent,
    TaskListElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
