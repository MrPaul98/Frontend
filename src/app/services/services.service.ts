import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpclient:HttpClient) { }

  saveUserData(user:object):Observable<object>{

    return  this.httpclient.post('http://localhost:9090/TRS/AddUser',user);
   }

   login(emailId:string,password:string,usertype:string):Observable<any>{

    return this.httpclient.get<any>('http://localhost:9090/TRS/Login/'+emailId+'/'+password+'/'+usertype);
   }

   putdoctortoken(dcotoken:object):Observable<object>{
       
    return this.httpclient.post('http://localhost:9090/DTRS/AddDoctoken',dcotoken);
   }
  putelectriciantoken(etoken:object):Observable<object>{
    return this.httpclient.post('http://localhost:9090/ETRS/AddEletoken',etoken);
  }
  putlawyertoken(ltoken:object):Observable<object>{
    return this.httpclient.post('http://localhost:9090/LTRS/AddLawtoken',ltoken);
  }
  getdoctortoken():Observable<any>{
    return this.httpclient.get('http://localhost:9090/DTRS/getDoctoken');
  }
  getuserdata(email:string):Observable<any>{
    return this.httpclient.get('http://localhost:9090/DTRS/getpatientdata/'+email);
  }
  getadmindoctoken():Observable<any>{
    return this.httpclient.get('http://localhost:9091/ADTRS/getDoctoken');
  }
  geteletoken():Observable<any>{
    return this.httpclient.get('http://localhost:9090/ETRS/getEletoken');
  }
  geteleuserdata(email:string):Observable<any>{
    return this.httpclient.get('http://localhost:9090/ETRS/getuserdata/'+email);
  }
  getadmineletoken():Observable<any>{
    return this.httpclient.get('http://localhost:9091/AETRS/getEletoken');
  }
  getlawtoken():Observable<any>{
    return this.httpclient.get('http://localhost:9090/LTRS/getLawtoken');
  }
  getlawuserdata(email:string):Observable<any>{
    return this.httpclient.get('http://localhost:9090/LTRS/getuserdata/'+email); 
  }
  getadminlawtoken():Observable<any>{
    return this.httpclient.get('http://localhost:9091/ALTRS/getLawtoken');
  }
}
function user(user: any) {
  throw new Error('Function not implemented.');
}

