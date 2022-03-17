import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  doneList: Task[] = [];

  constructor(private apiService: ApiService) { 
      
    // let task3 = new Task("Studia Css", 0);
    // let task4 = new Task("Studia Html", 2);
    // let task6 = new Task("Studia", 3);

  }

  ngOnInit(): void {
    // this.apiService.getDoneTask().subscribe(data => this.doneList = data);
    this.apiService.getDoneTask().subscribe(data => this.doneList = data);
  }

  deleteTask(taskID: string){
    this.apiService.deleteTask(taskID).subscribe(data => console.log(data));
  }

}
