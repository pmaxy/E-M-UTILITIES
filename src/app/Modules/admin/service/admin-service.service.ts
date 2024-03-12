import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  apiUrl='http://localhost:3000/Data'
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.apiUrl)
  }
}
