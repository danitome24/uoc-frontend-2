import { Injectable } from '@angular/core';
import { UserApiService } from './backend-api/user-api.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class SigninService {
  private loggedIn = false;

  constructor(private userApiService: UserApiService, private userStoreService) {
  }

  public signIn(email: string, password: string): Observable<User> {
    return this.userApiService.getUserByEmail(email);
  }
}
