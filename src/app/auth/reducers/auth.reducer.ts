import {User} from '../../shared/models/user.model';
import {LOGOUT, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS} from '../actions/auth.actions';
import {Auth} from '../../shared/models/auth.model';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
    user: User | null;
    auth: Auth;
}

export const initialState: State = {
    user: null,
    auth: {errorOnLogin: false},
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
                    errorOnLogin: true
                }
            };

        case SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.user,
                auth: {
                    errorOnLogin: false
                }
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