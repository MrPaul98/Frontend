import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdata } from 'src/app/Supervisorlevelviewtoken/doctor/userdata';
import { ServicesService } from 'src/app/services/services.service';
import { Doctor } from './doctor';
import { Admindoctoken } from './admindoctoken';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
    
    emailID:string='';
    @Input() userdata:Userdata;
    admin:Observable<Admindoctoken[]>;
    doctor:Observable<Doctor[]>;
  constructor(private service:ServicesService) {
      this.doctor = service.getdoctortoken();
      this.userdata = new Userdata();
      this.admin = service.getadmindoctoken();
   }

  ngOnInit(): void {
  }
  submit(){
  this.service.getuserdata(this.emailID).subscribe(
       data=>{
             
             this.userdata = data; 
             console.log(this.userdata.firstname); 
        },
        error=>{
              console.log(error);
        }
   );
  }

}
