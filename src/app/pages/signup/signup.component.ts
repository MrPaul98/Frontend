import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public user = {

    emailId:'',
    password:'',
    usertype:'',
    userdata:{
    firstname:'',
    middlename:'',
    lastname:'',
    phonenumber:'',
    city:'',
    state:'',
    pincode:''
    }
  };
  
    selectstate = ["Andhra Pradesh","Andaman and Nicobar Islands",
    "Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh",
    "Dadar and Nagar Haveli","Daman and Diu","Delhi",
    "Lakshadweep","Puducherry","Goa","Gujarat","Haryana",
    "Himachal Pradesh","Jammu and Kashmir","Jharkhand",
    "Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
    "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
    "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
    "Uttarakhand","West Bengal"];
  
    accounttype = ["Customer","Doctor","Electrician","Lawyer"];
  constructor(private service:ServicesService) { 
  }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.user);
    this.service.saveUserData(this.user).subscribe(
      data=>{
          console.log(data);
      },
      error=>{
         console.log(error);
      }
    );
    
  }

}
