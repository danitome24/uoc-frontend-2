import {createAction, props} from '@ngrx/store';
import {User} from '../../shared/models/user.model';

export const SHOW_USER_PROFILE = '[Profile Page] ShowUserProfile';
export const UPDATE_USER_PROFILE = '[Profile Page] UpdateUserProfile';

export const actions = {
    showUserProfile: createAction(
        SHOW_USER_PROFILE
    ),
    updateUserProfile: createAction(
        UPDATE_USER_PROFILE,
        props<{user: User}>()
    )
};
