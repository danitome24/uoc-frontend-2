import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { filter, flatMap, map, tap, toArray } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }

  getUserById(userId: number) {
    return this.http.get<User[]>('api/users').pipe(
      flatMap((response) => response),
      filter(user => user.id === userId)
    );
  }
}
