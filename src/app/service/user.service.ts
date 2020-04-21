import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';
import { error } from 'protractor';

@Injectable({
  providedIn:'root'
})

export class UserService {

  constructor(private http: HttpClient){}

  getAllUser(): Observable<User[]>{
    const url = 'https://api.github.com/users'
    return this.http.get<User[]>(url)
  }

  getUserByLogin(login: string): Observable<User[]>{
    const url = `https://api.github.com/users/${login}`
    return this.http.get<User[]>(url)
  }        
}