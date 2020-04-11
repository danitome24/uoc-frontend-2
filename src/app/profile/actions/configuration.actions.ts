import {createAction, props} from '@ngrx/store';

export const PREFERENCES_NOTIFICATIONS_UPDATE = '[Config Page] NotificationsUpdate';

export const actions = {
    notificationsUpdate: createAction(
        PREFERENCES_NOTIFICATIONS_UPDATE,
        props<{sendNotifications: boolean}>()
    ),
};
