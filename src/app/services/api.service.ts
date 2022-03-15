import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../model/task';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getApiTask(): Observable<Task[]>{
    return this.http.get<Task[]>('https://6229de55be12fc4538aa6c8e.mockapi.io/task').pipe(
      map(this.filterActiveTasks),
      map(this.createTaskObj)
      );
  }

  getDoneTask(): Observable<Task[]>{
    return this.http.get<Task[]>('https://6229de55be12fc4538aa6c8e.mockapi.io/task').pipe(
      map(this.filterDoneTasks),
      map(this.createTaskObj)
      );
  }

  filterActiveTasks(tasks:any[]):any[]{
    const taskArray = [];
    for (const task of tasks) {
      if (!task.doneDate) {
        taskArray.push(task)
      }
    }
    return taskArray;
  }

  filterDoneTasks(tasks:any[]):any[]{
    const taskArray = [];
    for (const task of tasks) {
      if (task.doneDate) {
        taskArray.push(task)
      }
    }
    return taskArray;
  }

  createTaskObj(tasks: any[]): Task[]{
    const taskArray: Task[] = [];
    for (const element of tasks) {
      const newTask = new Task(element.id, element.name, element.priority, element.creationDate);
      if (element.doneDate) {
        newTask.doneDate = new Date(element.doneDate)
      }
      taskArray.push(newTask);
    }
    return taskArray;
  }
}
