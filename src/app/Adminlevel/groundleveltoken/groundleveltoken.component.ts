import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { Admindoctoken } from 'src/app/Supervisorlevelviewtoken/doctor/admindoctoken';

@Component({
  selector: 'app-groundleveltoken',
  templateUrl: './groundleveltoken.component.html',
  styleUrls: ['./groundleveltoken.component.css']
})
export class GroundleveltokenComponent implements OnInit {

  @Input() ad:Admindoctoken; 
  constructor(private service:ServicesService) { 
    this.ad = new Admindoctoken();
  }

  ngOnInit(): void {
  }
  submit(){
    

  }

}
