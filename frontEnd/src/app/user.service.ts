import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: User) {
    const url = 'http://localhost:3000/api/login';
    return this.http.post(url, user);
  }
}
