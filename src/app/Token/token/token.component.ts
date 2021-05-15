import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  
  msg:string="";
  state:boolean=false;
  public ltoken={
  emailID:'',
	type_of_lawyer:'',
	message_to_lawyer:'',
	appoinment_date:''
  }
  public etoken={
  emailID:'',
	type_of_electrician:'',
	estimated_time_of_arrival:'',
   message_to_electrician:''
  }
  public dcotoken={
    
    emailID:'',
    gender:'',
    doctorTypeToken:'',
    messageToDoctor:''
  }
  doctortype = ["Physical therapist","Podiatrist","Neurologist","Dermatologist","ENT doctor"];
  gen = ["Male","Female","Transgender"];
  typeele = ["Industrial Electrician","Commercial Electrician","Residential Electrician"];
  typeoflawyer =["Intellectual Property (IP) Lawyers","Family Lawyers","Estate Planning Lawyers",
    "Personal Injury Lawyers","Malpractice Lawyers",
    "Business Lawyers","Labor Lawyers","Tax Lawyers","Bankruptcy Lawyers",
    "Immigration Lawyers","Real Estate Lawyers",
    "Constitutional Lawyers","Environmental Lawyers","Civil Litigation Lawyers",
    "Criminal Defense Lawyers"];
  constructor(private service:ServicesService) { }

  ngOnInit(): void {
  }
  Doctorsubmit(){
       this.service.putdoctortoken(this.dcotoken).subscribe(
                     
        data=>{
            console.log(data);
            this.msg = "Data is Entered Sucessfully";
            this.state = true;
        },
        error=>{
            console.log(error);
        }
       );
    
  }
  Elesubmit(){
      this.service.putelectriciantoken(this.etoken).subscribe(
          data=>{
            console.log(data);
            this.msg = "Data is Entered Sucessfully";
            this.state = true;
          },
          error=>{
            console.log(error);
          }
      );
  }

  Lawsubmit(){
      this.service.putlawyertoken(this.ltoken).subscribe(
        data=>{
          console.log(data);
          this.msg = "Data is Entered Sucessfully";
          this.state = true;
        },
        error=>{
          console.log(error);
        }
      );
  }

}
