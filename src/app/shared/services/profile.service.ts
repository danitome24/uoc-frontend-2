import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
/* import { UserOptions } from '../models/user'; */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
/* import { AppStore } from '../states/store.inteface';
import { Store } from '@ngrx/store';
import * as UserActions from 'app/shared/states/user/actions';
import { User } from 'app/shared/models/user'; */

@Injectable()
export class ProfileService {

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

  loadProfile() {
    // return of(this.mockUser as any);
    //return this.http.get<UserOptions>(AppSettings.API_ENDPOINT_USER_ME);
  }
  logout(): void {
    /*  this.store$.dispatch(new UserActions.Logout()); */
  }

  public updateProfile(profile: any /* User */): Observable<any /* User */> {
    return this.http.put(AppSettings.API_ENDPOINT_USER, profile, this.httpOptions).pipe(
      map(() => profile),
      catchError(this.handleError)
    );
  }

  public signupProfile(profile: any /* UserOptions */): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_USER_CREATE,
      profile
    );
  }
  public requestRememberPassword(uid: { uid: string }): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD,
      uid
    );
  }
  public rememberPassword(uidAndHash: {
    uid: string;
    hash: string;
  }): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD,
      uidAndHash
    );
  }
  public confirmUser(uidAndHash: {
    uid: string;
    hash: string;
  }): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_CONFIRM_USER,
      uidAndHash
    );
  }
}
