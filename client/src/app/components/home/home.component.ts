import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { EventInterface } from 'src/app/models/event-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
