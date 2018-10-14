import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private http: HttpClient) {}

  getRecords() {
    const url = 'http://localhost:3000/api/record';
    return this.http.get(url);
  }
}
