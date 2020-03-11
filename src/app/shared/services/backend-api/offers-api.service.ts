import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../../models/offer.model';
import { AppSettings } from '../../app.settings';
import { User } from '../../models/user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class OffersApiService {
  constructor(private http: HttpClient) {
  }

  public getOffersForUserStudies(user: User): Observable<Offer[]> {
    return this.http.get <Offer[]>(AppSettings.API_ENDPOINT_OFFERS).pipe(
      map(offers => offers.filter(offer => user.studies.find(study => {
        if (study.hasOwnProperty('category')) {
          return offer.category.name.toString() === study.category.name;
        }
        return offer.category.name.toString() === study.title;
      })))
    );
  }
}
