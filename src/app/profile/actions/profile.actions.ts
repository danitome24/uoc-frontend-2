import {createAction} from '@ngrx/store';

export const SHOW_USER_PROFILE = '[Profile Page] ShowUserProfile';

export const actions = {
    showUserProfile: createAction(
        SHOW_USER_PROFILE
    ),
};
