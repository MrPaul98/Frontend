import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpclient:HttpClient) { }
  getadmindoctoken():Observable<any>{
    return this.httpclient.get('http://localhost:9091/ADTRS/getDoctoken');
  }
  getadmineletoken():Observable<any>{
    return this.httpclient.get('http://localhost:9091/AETRS/getEletoken');
  }
  getadminlawtoken():Observable<any>{
    return this.httpclient.get('http://localhost:9091/ALTRS/getLawtoken');
  }

}
