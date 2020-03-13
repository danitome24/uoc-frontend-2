import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
/* import { UserOptions } from '../models/user'; */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/* import { AppStore } from '../states/store.inteface';
import { Store } from '@ngrx/store';
import * as UserActions from 'app/shared/states/user/actions';
import { User } from 'app/shared/models/user'; */

@Injectable()
export class UserService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient /* , private store$: Store<AppStore> */
  ) {}

  private handleError(error: any) {
    return throwError(error);
  }

  public update(profile: any /* User */): Observable<any /* User */> {
    return this.http.put(AppSettings.API_ENDPOINT_USER, profile, this.httpOptions).pipe(
      map(() => profile),
      catchError(this.handleError)
    );
  }
}
