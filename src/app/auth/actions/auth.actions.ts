import {createAction, props} from '@ngrx/store';
import {User} from '../../shared/models/user.model';
import {Language} from '../../shared/models/language.model';

export const SIGN_IN = '[SignIn Page] SignIn';
export const SIGN_IN_FAILED = '[SignIn Page] SignInFailed';
export const SIGN_IN_SUCCESS = '[SignIn Page] SignInSuccess';
export const LOGOUT = '[Logout Page] Logout';
export const FORGOT_PASSWORD_REQUEST = '[Forgotten Page] ForgotPasswordRequest';
export const FORGOT_PASSWORD_FAILED = '[Forgotten Page] ForgotPasswordFailed';
export const FORGOT_PASSWORD_SUCCESS = '[Forgotten Page] ForgotPasswordSuccess';

// Profile. TODO move this to profile module.
export const SHOW_USER_PROFILE = '[Profile Page] ShowUserProfile';
export const UPDATE_USER_PROFILE = '[Profile Page] UpdateUserProfile';
export const ADD_LANGUAGE = '[Profile Language Page] AddLanguage';
export const UPDATE_LANGUAGE = '[Profile Language Page] UpdateLanguage';

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
        // ForgotPassword
        forgotPasswordRequest: createAction(
            FORGOT_PASSWORD_REQUEST,
            props<{ email: string }>()
        ),
        // Profile. TODO move this to profile module.
        showUserProfile: createAction(
            SHOW_USER_PROFILE
        ),
        updateUserProfile: createAction(
            UPDATE_USER_PROFILE,
            props<{ user: User }>()
        ),
        addLanguage: createAction(
            ADD_LANGUAGE,
            props<{ language: Language }>()
        ),
        updateLanguage: createAction(
            UPDATE_LANGUAGE,
            props<{ language: Language }>()
        )
    }
;
