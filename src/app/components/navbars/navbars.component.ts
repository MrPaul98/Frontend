import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LoginserviceService } from 'src/app/pages/login/loginservice.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {


  constructor(public login:LoginserviceService,private rout:Router) { 
  }

  ngOnInit(): void {
  }
  logout(){
    this.login.logout();
    this.rout.navigate(['login']);
  }

}
