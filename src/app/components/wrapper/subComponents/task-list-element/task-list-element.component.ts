import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';  //importa 2 cose: Component --> per andare a definire il tipo di elemento | Oninit
import { Task } from 'src/app/model/task';



@Component({
  selector: 'app-task-list-element',                 //come si chiama il suo selector
  templateUrl: './task-list-element.component.html', //l'url relativo
  styleUrls: ['./task-list-element.component.scss']  //l'url dello style in un array perchè potrebbe avere più fogli di stile 
})


export class TaskListElementComponent implements OnInit { //E' una classe che implementa OnInit --> ngOnInit definisce il ciclo di vita dell'oggetto --> dove creo i task
  
  @Input() task?: Task;                                   //@input è ciò che viene dato in input all'elemento task-list-element 
  @Output() done: EventEmitter<Task>;                  //per tutti gli output devo generare degli eventi con EVENTEMITTER (classe js)
  @Output() delete: EventEmitter<string>;
  

  constructor() {
    // this.task = new Task("Studia Angular", 10)
    this.done = new EventEmitter<Task>();
    this.delete = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  taskDone(){
    if (this.task) {
      this.done.emit(this.task);
    }
  }

  taskDelete(){
    if (this.task) {
      this.delete.emit(this.task.id);
    }
  }

  
}
