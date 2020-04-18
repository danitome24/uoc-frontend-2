import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromUser from '../../auth/reducers/auth.reducer';

// Reducer
export function reducer(state = fromUser.initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

// Selectors
export const selectUserProfile = createFeatureSelector('auth');
export const selectShowUserProfile = createSelector(
    selectUserProfile,
    (state: fromUser.State) => state.user
);
