import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import * as fromAuth from '../actions/auth.actions';
import {SigninService} from '../signin/signin.service';
import {from} from 'rxjs';
import {User} from '../../shared/models/user.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private signinService: SigninService, private router: Router) {
    }

    // @ts-ignore
    login$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuth.SIGN_IN),
        switchMap(payload => {
            return from(this.signinService.login(payload));
        }),
        map((user: null | User) => {
            if (null == user) {
                return fromAuth.actions.signInFailed({});
            }
            return fromAuth.actions.signInSuccess({user});
        }),
    ));

    // @ts-ignore

    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuth.SIGN_IN_SUCCESS),
        map(() => {
            return this.router.navigate(['admin', 'dashboard']);
        })
    ), {dispatch: false});

    loginFailed$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuth.SIGN_IN_FAILED),
        map(() => {
            this.router.navigateByUrl('/');
        })),
        {dispatch: false}
    );
}
