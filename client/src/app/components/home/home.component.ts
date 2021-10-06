import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { 

  }

  ngOnInit(): void {
  }

  getListEvents(){
    this.dataApi.getAllEvents().subscribe(events => console.log(events));
  }

}
