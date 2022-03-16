import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ComunicationService {

  public isDrawerOpen: BehaviorSubject<boolean>;

  constructor() { 
    this.isDrawerOpen = new BehaviorSubject<boolean>(false);
    //this.isDrawerOpen.next(true);       //QUESTO è IL MODO PER FAR CAMBIARE LA VARIABILE DA FALSE A TRUE --> con .next(valore)
  }
}


//BEAVIOUR SUBJECT variabile che necessita di un risultato e da errore se non arriva
//SUBJECT invece non deve essere inizializzata e non è detto che arrivi un valore
//REPLAY SUBJECT variabile che tiene lo storico di tutti i valori che le sono stati assegnati nel tempo e che è possibile recuperare