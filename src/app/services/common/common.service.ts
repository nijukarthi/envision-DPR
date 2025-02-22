import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public baseUrl = "http://localhost:7777/"; // Production (149 server) 
}
