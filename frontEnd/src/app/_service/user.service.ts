import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: User) {
    const url = 'http://localhost:3000/api/user/login';
    return this.http.post(url, user).pipe(
      map(u => {
        if (u) {
          localStorage.setItem('currentUser', JSON.stringify(u));
        }
        return u;
      })
    );
  }
}
