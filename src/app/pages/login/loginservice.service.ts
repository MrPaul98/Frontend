import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private httpclient:HttpClient) { }

  public login(){
    let userstr = localStorage.getItem('user');
    if(userstr!=null){
      return true;
    }
    else{
      return false;
    }
  }

  public logout(){
    localStorage.removeItem('user');
    return true;
  }
 
 public setuser(user:any){
  
   localStorage.setItem("user",JSON.stringify(user));
 }

 public getuser(){
  let userstr = localStorage.getItem('user');
  if(userstr!=null){
          return JSON.parse(userstr);
  }
  else{
    this.logout();
     return null;
  }
 }
}
