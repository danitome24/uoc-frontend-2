import {User} from '../../shared/models/user.model';
import {
    FORGOT_PASSWORD_REQUEST,
    LOGOUT,
    SIGN_IN,
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS,
    UPDATE_USER_PROFILE
} from '../actions/auth.actions';
import {Auth} from '../../shared/models/auth.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
    user: User | null;
    auth: Auth;
}

export const initialState: State = {
    user: null,
    auth: {
        errorOnLogin: false,
        loggedIn: false,
        forgottenPassword: false,
    },
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
            };

        case SIGN_IN_FAILED:
            return {
                ...state,
                auth: {
                    errorOnLogin: true,
                    loggedIn: false,
                    forgottenPassword: false
                }
            };

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.user,
                auth: {
                    errorOnLogin: false,
                    loggedIn: true,
                    forgottenPassword: false
                }
            };
        case UPDATE_USER_PROFILE:
            const updatedUserProfile = {
                ...state.user,
                ...action.user
            };
            return {
                ...state,
                user: updatedUserProfile
            };
        case LOGOUT:
            return {
                ...initialState
            };
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                auth: {
                    errorOnLogin: false,
                    loggedIn: false,
                    forgottenPassword: true
                }
            };
        default:
            return state;
    }
}

// Selectors

export const selectAuthFeature = createFeatureSelector('auth');
export const selectAuthErrorOnLogin = createSelector(
    selectAuthFeature,
    (state: State) => state.auth.errorOnLogin
);
export const selectAuthIsLoggedIn = createSelector(
    selectAuthFeature,
    (state: State) => state.auth.loggedIn
);
export const selectForgottenPasswordRequested = createSelector(
    selectAuthFeature,
    (state: State) => state.auth.forgottenPassword
);

// Selectors
// TODO move this to profile module
export const selectUserProfile = createFeatureSelector('auth');
export const selectShowUserProfile = createSelector(
    selectUserProfile,
    (state: State) => state.user
);
