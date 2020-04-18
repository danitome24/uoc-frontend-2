import {createAction, props} from '@ngrx/store';
import {User} from '../../shared/models/user.model';

export const SIGN_IN = '[SignIn Page] SignIn';
export const SIGN_IN_FAILED = '[SignIn Page] SignInFailed';
export const SIGN_IN_SUCCESS = '[SignIn Page] SignInSuccess';
export const LOGOUT = '[Logout Page] Logout';

// Profile. TODO move this to profile module.
export const SHOW_USER_PROFILE = '[Profile Page] ShowUserProfile';
export const UPDATE_USER_PROFILE = '[Profile Page] UpdateUserProfile';

export const actions = {
        signIn: createAction(
            SIGN_IN,
            props<{ email: string, password: string }>()
        ),
        signInSuccess: createAction(
            SIGN_IN_SUCCESS,
            props<{ user: User }>()
        ),
        signInFailed: createAction(
            SIGN_IN_FAILED,
            props<{}>()
        ),
        logout: createAction(
            LOGOUT,
            props<{}>()
        ),
        // Profile. TODO move this to profile module.
        showUserProfile: createAction(
            SHOW_USER_PROFILE
        ),
        updateUserProfile: createAction(
            UPDATE_USER_PROFILE,
            props<{ user: User }>()
        )
    }
;
