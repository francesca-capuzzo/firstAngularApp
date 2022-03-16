import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  open!: boolean;
  constructor(private comService: ComunicationService) { }

  ngOnInit(): void {
    this.comService.isDrawerOpen.subscribe(isOpen => {
      this.open = isOpen;
    });
  }

}


//NB IN RXJS ESISTONO VARIABILI CHE SONO ACOLTABILI -> COME GLI OSSERVABILI MA VENGONO CHIAMATE SUBJECTS -> vedi comunicationService
