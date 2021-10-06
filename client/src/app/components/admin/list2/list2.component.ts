import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { EventInterface } from 'src/app/models/event-interface';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {

  constructor(public dataApiService: DataApiService, public authService: AuthService) { 

  }
  public events: EventInterface;
  ngOnInit(): void {
    this.getListEvents();
  }

  getListEvents(): void {
    this.dataApiService.getAllEvents()
    .subscribe((events:EventInterface)=>(this.events=events));
  }


}
