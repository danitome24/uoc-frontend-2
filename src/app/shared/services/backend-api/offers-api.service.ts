import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../../models/offer.model';
import { AppSettings } from '../../app.settings';

@Injectable()
export class OffersApiService {
  constructor(private http: HttpClient) {
  }

  public getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(AppSettings.API_ENDPOINT_OFFERS);
  }
}
