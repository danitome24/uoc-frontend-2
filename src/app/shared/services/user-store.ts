import { Injectable } from '@angular/core';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private tokenObject: Token = null;

  set token(token: Token | null) {
    if (token === null) {
      return;
    }
    localStorage.setItem('uoc-alumni', token.toString());
  }

  get token(): Token {
    this.tokenObject = JSON.parse(localStorage.getItem('uoc-alumni')) as Token;
    return this.tokenObject;
  }

  public logout() {
    this.token = null;
    localStorage.clear();
  }

  isLoggedIn() {
    return this.token != null;
  }
}
