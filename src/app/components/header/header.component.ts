import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLocation: boolean = false;

  // @Output() public onMenuClicked: EventEmitter<any>

  constructor(private comService: ComunicationService, public router: Router) { 
    // this.onMenuClicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  menuClick(): void{
    // this.onMenuClicked.emit();

    //this.comService.isDrawerOpen.next(true);
    this.comService.isDrawerOpen.next(!this.comService.isDrawerOpen.value);  //PER FARLA TRUE QUANDO è FALSE E FALSE QUANDO è TRUE
  }


}
