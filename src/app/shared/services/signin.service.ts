import { Injectable } from '@angular/core';
import { UserApiService } from './backend-api/user-api.service';
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStoreService } from './user-store';

@Injectable()
export class SigninService {
  private loggedIn = false;

  constructor(private userApiService: UserApiService, private userStore: UserStoreService) {
  }

  public signIn(email: string, password: string): Observable<User | Observable<never>> {
    return this.userApiService.getUserByEmail(email)
      .pipe(
        map((resp: User) => {
            if (resp.password === password) {
              this.userStore.token = resp.id.toString();
              return resp;
            } else {
              console.log('DWP');
              throw throwError(new Error('User password does not match'));
            }
          }
        )
      );
  }
}
