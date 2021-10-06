import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { EventInterface } from 'src/app/models/event-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dataApiService: DataApiService,
    public location: Location,
    public authService: AuthService
  ) { 
    
  }
  user: UserInterface;
  ngOnInit() {
  }

  //identificador = this.authService.getCurrentUser().tienda;
  

  
  onSaveEvent(eventForm: NgForm): void {
    if (eventForm.value.eventId == null) {
      // NEW
      this.dataApiService.saveEvent(eventForm.value).subscribe(event => location.reload());
    } else {
      // update
      this.dataApiService.updateEvent(eventForm.value).subscribe(event => location.reload());
    }
  }
}
