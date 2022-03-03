import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  doneList: Task[];

  constructor() { 
      
    let task3 = new Task("Studia Css", 0);
    let task4 = new Task("Studia Html", 2);
    let task6 = new Task("Studia", 3);

    this.doneList = [task3, task4, task6];
  }

  ngOnInit(): void {
  }

}
