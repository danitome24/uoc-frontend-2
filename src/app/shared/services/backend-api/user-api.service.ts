import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';
import { AppSettings } from '../../app.settings';
import { Language } from '../../models/language.model';

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

  updateUserStudy(user: User, study) {
    const index = user.studies.findIndex(studyRow => studyRow.uid === study.uid);
    user.studies.splice(index, 1, study);

    return this.http.put(AppSettings.API_ENDPOINT_USER, user);
  }

  updateUser(user: User) {
    return this.http.put(AppSettings.API_ENDPOINT_USER, user);
  }

  updateLanguage(user: User, language: Language) {
    const index = user.languages.findIndex(langRow => langRow.uid === language.uid);
    user.languages.splice(index, 1, language);

    return this.http.put(AppSettings.API_ENDPOINT_USER, user);
  }
}
