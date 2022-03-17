import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  taskList: Task[] = [];                                    //è un array di Tasks la sua proprietà --> definito con

  constructor(private apiService: ApiService) { 

    // let task1 = new Task("Studia Angular", 10);       //genero diversi task e li metto nell'array taskList
    // let task2 = new Task("Studia Javascript", 10);
    // let task3 = new Task("Studia Css", 0);
    // let task4 = new Task("Studia Html", 2);
    // let task5 = new Task("Studia TypeScript", 10);
    // let task6 = new Task("Studia", 3);

    // this.taskList = [task1, task2, task3, task4, task5, task6];
    
  }

  ngOnInit(): void {
    // this.apiService.getApiTask().subscribe(data => this.taskList = data);
    this.apiService.getActiveTask().subscribe(task => this.taskList = task)
  }

 

  // taskDone(id:string){   //id arriverà in input dalla funzione TaskDone()
  //   let tempArray = [];
  //   for (const task of this.taskList) {
  //     if (task.id !== id) {
  //       tempArray.push(task);
  //     }
  //   }
  //   this.taskList = tempArray;
  // }

  taskDone2 (task: Task) {
   this.apiService.taskDone(task).subscribe(b => console.log(b))
  }










}
