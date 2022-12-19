import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './model/employee-list';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {

  constructor(private http: HttpClient) { }

  employeeDetails(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>('../assets/employeeList.json')
  }
}
