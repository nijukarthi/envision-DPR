import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router, public common: CommonService) { }

  postInputAuth(url: any, params: any, config?: any) {
    return this.http.post(this.common.baseUrl + url, params, config)
  }

  getInputAuth(url: any, params: any) {
    return this.http.get(this.common.baseUrl + url, params)
  }

  token(params: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Connection': 'keep-alive',
    });
    return this.postInputAuth('employee/employeeLogin', params, { headers: headers }); // 93 Dev Server

  }

  login(params: any): Observable<any> {
    return this.postInputAuth('employee/employeeLogin', params); // DEV
  }

  empDetails(params: any): Observable<any> {
    return this.getInputAuth('employee/getEmployeeDetails', params); // DEV
  }

  getprojectbyempid(params: any): Observable<any> {
    return this.getInputAuth('employee/getprojectbyempid', params); // DEV
  }

  addprodetails(id:any,params: any): Observable<any> {
    return this.postInputAuth('employee/addprodetails/'+id, params); // DEV
  }

  getprojectwithdetails(id:any,params: any): Observable<any> {
    return this.getInputAuth('employee/getprojectwithdetails/'+id,params); // DEV
  }
}
