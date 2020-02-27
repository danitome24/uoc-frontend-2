import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { filter, flatMap, map, tap, toArray } from 'rxjs/operators';
import { Offer } from '../models/offer.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User[]>('api/users').pipe(
      flatMap((response) => response),
      filter(user => user.id === userId)
    );
  }

  getOffers() {
    return this.http.get<Offer[]>('api/offers');
  }

  getOfferById(offerId: number) {
    return this.http.get<Offer[]>('api/offers').pipe(
      flatMap((response) => response),
      filter(offer => offer.id === offerId)
    );
  }
}
