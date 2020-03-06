import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';
import { AppSettings } from '../../app.settings';

@Injectable()
export class UserApiService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(AppSettings.API_ENDPOINT_USER);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User[]>(AppSettings.API_ENDPOINT_USER).pipe(
      flatMap((response) => response),
      filter(user => user.email === email)
    );
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User[]>(AppSettings.API_ENDPOINT_USER).pipe(
      flatMap((response) => response),
      filter(user => user.id === userId)
    );
  }

  removeStudyFromUser(user: User, studyId: number) {
    user.studies = user.studies.filter(study => study.uid !== studyId);

    return this.http.delete(AppSettings.API_ENDPOINT_USER + '/' + user.id);
  }
}
