import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  taskList: Task[];                                    //è un array di Tasks la sua proprietà --> definito con

  constructor() { 

    let task1 = new Task("Studia Angular", 10);       //genero diversi task e li metto nell'array taskList
    let task2 = new Task("Studia Javascript", 10);
    let task3 = new Task("Studia Css", 0);
    let task4 = new Task("Studia Html", 2);
    let task5 = new Task("Studia TypeScript", 10);
    let task6 = new Task("Studia", 3);

    this.taskList = [task1, task2, task3, task4, task5, task6];
  }

  ngOnInit(): void {
  }

  taskDeleted(id:string){   //id arriverà in input dalla funzione TaskDone()
    let tempArray = [];
    for (const task of this.taskList) {
      if (task.id !== id) {
        tempArray.push(task);
      }
    }
    this.taskList = tempArray;
  }

}
