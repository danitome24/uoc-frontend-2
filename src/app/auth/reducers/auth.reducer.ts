import {User} from '../../shared/models/user.model';
import {LOGOUT, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS, UPDATE_USER_PROFILE} from '../actions/auth.actions';
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
        loggedIn: false
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
                    loggedIn: false
                }
            };

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.user,
                auth: {
                    errorOnLogin: false,
                    loggedIn: true,
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

// Selectors
// TODO move this to profile module
export const selectUserProfile = createFeatureSelector('auth');
export const selectShowUserProfile = createSelector(
    selectUserProfile,
    (state: State) => state.user
);
