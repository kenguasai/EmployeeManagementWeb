import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import { Employee } from './models/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    
    //apiUrl: string = 'http://localhost:1207/api';
    apiUrl: string = 'http://localhost:44300/api';
    httpOptions = {
        headers: new HttpHeaders({
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token,Origin, Authorization'
        })
    };
    

    constructor (
        private http: HttpClient
    ) {}

    getUsers(): Observable<any> {
        return this.http.get(`${this.apiUrl}/Login/GetUsers`, this.httpOptions);
    }

    login(user: User): Observable<any> {
        return this.http.post(`${this.apiUrl}/Login/Login`, user, this.httpOptions);
    }

    getEmployeeDetails(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiUrl}/Employee/GetEmployees`, this.httpOptions);
    }

    addEmployee(employee: Employee): Observable<any> {
        return this.http.post(`${this.apiUrl}/Employee/AddEmployee`, employee,  this.httpOptions);
    }
}
