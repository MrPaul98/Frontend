import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import { SignupComponent } from '../signup/signup.component';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  emailId:string='Admin@hmail.com';
  password:string='Admin';
  msg:string='';
  loig:boolean=false;
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
  public logindata = {
    emailId:'',
    password:'',
    usertype:''
  };
  accounttype = ["Admin","Customer","Doctor","Electrician","Lawyer"];
  constructor(private service:ServicesService,private router:Router,private login:LoginserviceService) {
    
   }

  ngOnInit(): void {
  }
  submit(){

    if(this.logindata.usertype == 'Admin' ){
        if(this.logindata.emailId == this.emailId && this.logindata.password == this.password){
        this.login.setuser(this.logindata);
        this.router.navigate(['groundleveltoken']);
    }
    else{
      this.loig=true;
      this.msg='Data Entered is not correct'
    }
    }
    else if(this.logindata.usertype == 'Customer'){
      this.service.login(this.logindata.emailId,this.logindata.password,this.logindata.usertype).subscribe(
         
        (data:any)=>{
        this.loig=true;
        console.log(data);
        this.user = data;
        
        this.login.setuser(this.user);
        console.log(this.user);
        this.login.login();
        this.router.navigate(['token']);
      },
      (error:any)=>{
        this.loig=true;
        this.msg='Data Entered is not correct'
        console.log(error.error);
      }
);
    }
    else if(this.logindata.usertype == 'Doctor'){

      this.service.login(this.logindata.emailId,this.logindata.password,this.logindata.usertype).subscribe(
         
        (data:any)=>{
        this.loig=true;
        console.log(data);
        this.user = data;
        
        this.login.setuser(this.user);
        console.log(this.user);
        this.login.login();
        this.router.navigate(['doctor']);
      },
      (error:any)=>{
        this.loig=true;
        this.msg='Data Entered is not correct'
        console.log(error.error);
      }
);
    }
    else if(this.logindata.usertype == 'Electrician'){

      this.service.login(this.logindata.emailId,this.logindata.password,this.logindata.usertype).subscribe(
         
        (data:any)=>{
        this.loig=true;
        console.log(data);
        this.user = data;
        
        this.login.setuser(this.user);
        console.log(this.user);
        this.login.login();
        this.router.navigate(['electrician']);
      },
      (error:any)=>{
        this.loig=true;
        this.msg='Data Entered is not correct'
        console.log(error.error);
      }
);
    }
    else{
      this.service.login(this.logindata.emailId,this.logindata.password,this.logindata.usertype).subscribe(
         
        (data:any)=>{
        this.loig=true;
        console.log(data);
        this.user = data;
        
        this.login.setuser(this.user);
        console.log(this.user);
        this.login.login();
        this.router.navigate(['lawyer']);
      },
      (error:any)=>{
        this.loig=true;
        this.msg='Data Entered is not correct'
        console.log(error.error);
      }
);

    }
  }
}
