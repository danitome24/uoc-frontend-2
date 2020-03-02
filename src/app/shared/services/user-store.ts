import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private tokenString: string = null;

  set token(token: string) {
    localStorage.setItem('uoc-alumni', token);
  }

  get token() {
    this.tokenString = localStorage.getItem('uoc-alumni');

    return this.tokenString;
  }

  isLoggedIn() {
    return this.token != null;
  }
}
