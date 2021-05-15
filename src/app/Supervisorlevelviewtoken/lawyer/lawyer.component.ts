import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { Userdata } from '../doctor/userdata';
import { Adminlawtoken } from './adminlawtoken';
import { Lawyer } from './lawyer';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css']
})
export class LawyerComponent implements OnInit {

  emailID:string='';
  @Input() userdata:Userdata;
  lawyer:Observable<Lawyer[]>;
  admin:Observable<Adminlawtoken[]>;
  constructor(private service:ServicesService) {
    this.userdata = new Userdata(); 
    this.lawyer = service.geteletoken();
    this.admin = service.getadminlawtoken();
   }

  ngOnInit(): void {
  }
  submit(){
    this.service.getlawuserdata(this.emailID).subscribe(
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
