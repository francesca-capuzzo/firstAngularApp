import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DoneComponent } from './components/wrapper/subComponents/done/done.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FilterComponent } from './components/wrapper/subComponents/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatsComponent } from './components/wrapper/subComponents/stats/stats.component';
import { TaskInputComponent } from './components/wrapper/subComponents/task-input/task-input.component';
import { TaskListElementComponent } from './components/wrapper/subComponents/task-list-element/task-list-element.component';
import { ToDoComponent } from './components/wrapper/subComponents/to-do/to-do.component';


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
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
