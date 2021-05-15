import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { Admineletoken } from './admineletoken';
import { Electrician } from './electrician';
import { Userdata } from './userdata';

@Component({
  selector: 'app-electrician',
  templateUrl: './electrician.component.html',
  styleUrls: ['./electrician.component.css']
})
export class ElectricianComponent implements OnInit {

  emailID:string='';
  @Input() userdata:Userdata;
  elec:Observable<Electrician[]>;
  admin:Observable<Admineletoken[]>;
  constructor(private service:ServicesService) {
    this.userdata = new Userdata();
    this.elec = service.geteletoken();
    this.admin = service.getadmineletoken();
   }

  ngOnInit(): void {
  }
  submit(){
    this.service.geteleuserdata(this.emailID).subscribe(
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
