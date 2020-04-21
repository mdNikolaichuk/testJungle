import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';

@Injectable({
  providedIn:'root'
})

export class ReposService {

  constructor(private http: HttpClient){}

  getUserRepo(user): Observable<any>{
    const url = `https://api.github.com/users/${user}/repos`
    return this.http.get<any>(url)
  }
}