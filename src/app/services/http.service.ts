import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:5000/api/data');
  }
}
