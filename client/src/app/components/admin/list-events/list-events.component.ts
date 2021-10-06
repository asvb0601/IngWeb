import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { EventInterface } from 'src/app/models/event-interface';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

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

  onDeleteEvent(id: string): void {
    if (confirm('¿esta seguro que quiere eliminar este producto?')) {
      this.dataApiService.deleteEvent(id).subscribe();
    }
  }

  onPreUpdateEvent(event: EventInterface):void{
    this.dataApiService.selectedEvent=Object.assign({},event);

  }


}
