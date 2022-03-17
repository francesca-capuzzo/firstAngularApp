import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { Task } from '../model/task';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = 'https://6229de55be12fc4538aa6c8e.mockapi.io/task';

  public allTasks = new BehaviorSubject<Task[]>([]);  //CREATO PER LA SINGOLA CHIAMATA

  constructor(private http: HttpClient) { 
    this.getAllTasks(); //ISTANZIATO PER LA SINGOLA CHIAMATA
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //UTILIZZO UNA DOPPIA CHIAMATA ALL'API:

  // getApiTask(): Observable<Task[]>{
  //   return this.http.get<Task[]>(this.API_URL).pipe(
  //     map(this.filterActiveTasks),
  //     map(this.createTaskObj)
  //     );
  // }

  // getDoneTask(): Observable<Task[]>{
  //   return this.http.get<Task[]>(this.API_URL).pipe(
  //     map(this.filterDoneTasks),
  //     map(this.createTaskObj)
  //     );
  // }



  //UTILIZZO UN METODO CON UNA SOLA CHIAMATA ANZICHè DUE PER PERFORMANCE:

  getAllTasks(): void{ //read = get
    this.http.get<any[]>(this.API_URL).pipe(
      map(taskObjectArray => this.createTaskObj(taskObjectArray))
    ).subscribe(task => this.allTasks.next(task))
  }



  getSingleTask(taskID: string): Observable<Task | undefined>{
    return this.allTasks.pipe( //cerco su tutti i task
      map(taskArray => taskArray.find(task => task.id === taskID)) //preso un task lo vado a filtrare per id con la funzione find() ti typescript
    )
  }



  createTask(task: Task): Observable<boolean>{ //create = post
    const httpOptions = {headers: new HttpHeaders({'Content-Type': "application/json"})};
    return this.http.post<Task>(this.API_URL, task, httpOptions).pipe(
      map(task => {
        this.getAllTasks(); //se è andato a buon fine mi ricarico tutti i task 
        return true
      }),
      catchError(error => of(false)) //altrimenti è un errore
    )
  } 



  deleteTask(taskID: string): Observable<boolean>{ //delete = delete
    const httpOptions = {headers: new HttpHeaders({'Content-Type': "application/json"})};
    return this.http.delete<any>(this.API_URL + "/" + taskID, httpOptions).pipe(
      map(response => {
        this.getAllTasks(); //se è andato a buon fine mi ricarico tutti i task 
        return true
      }),
      catchError(error => of(false)) //altrimenti è un errore
    )
  } 


  taskDone(task: Task): Observable<boolean>{ //update = put
    const httpOptions = {headers: new HttpHeaders({'Content-Type': "application/json"})};
    task.doneDate = new Date();

    return this.http.put<Task>(this.API_URL + "/" + task.id, task, httpOptions).pipe(
      map(response => {
        this.getAllTasks(); //se è andato a buon fine mi ricarico tutti i task 
        return true
      }),
      catchError(error => of(false)) //altrimenti è un errore
    )
  }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //UTILIZZATE NELLA DOPPIA CHIAMATA:

  // filterActiveTasks(tasks:any[]):any[]{
  //   const taskArray = [];
  //   for (const task of tasks) {
  //     if (!task.doneDate) {
  //       taskArray.push(task)
  //     }
  //   }
  //   return taskArray;
  // }

  // filterDoneTasks(tasks:any[]):any[]{
  //   const taskArray = [];
  //   for (const task of tasks) {
  //     if (task.doneDate) {
  //       taskArray.push(task)
  //     }
  //   }
  //   return taskArray;
  // }





  //UTILIZZATE NELLA SINGOLA CHIAMATA:

  getActiveTask(): Observable<Task[]>{
    return this.allTasks.pipe(
      map(allTask => allTask.filter(task => !task.doneDate))
    )
  }

  getDoneTask(): Observable<Task[]>{
    return this.allTasks.pipe(
      map(allTask => allTask.filter(task => task.doneDate))
    )
  }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //UTILIZZATA IN TUTTE LE CHIAMATE:

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


//NB IL SERVIZIO E' UN MODO UTILE PER FAR COMUNICARE DIVERSI COMPONENTI CHE LO CONDIVIDONO --> FUNZIONA SOLO PER COMPONENTI CREATI INSIEME AL SERVIZIO (PER EVITARE DI USARE INPUT E OUTPUT) --> LI RENDE MENO RIUTILIZZABILI PERO'
/*
TUTTI I SERVIZI DATI DA UN API (CRUD + FILTER/SORT/PAGINATION):
-CREATE -> POST
-READ -> GET
-UPDATE -> PUT
-DELETE -> DELETE

-FILTER -> SEARCH
-SORT
-PAGINATION -> page=1&limit=10 -> sorta le pagine con i dati displayati di 10 in 10
*/