import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})



export class CrudappService {
User: Object;

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://jsonplaceholder.typicode.com';


  getUsers() {
     return this.http.get(this.baseUrl + '/users');
   }
   getUsersTables() {
      return this.http.get(this.baseUrl + '/users');
    }
    getUsersById(id: any) {
       return this.http.get(this.baseUrl + '/users/'+id);
     }
   getUserById(id: any) {
   return this.http.get(this.baseUrl + '/posts?userId=' + id);
 }

}
export interface User {
    name: string;
    email: string;
    phone: string;
    company: {
        name: string;
    }
}
