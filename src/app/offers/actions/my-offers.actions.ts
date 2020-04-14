import {createAction, props} from '@ngrx/store';

export const SUBSCRIBE_TO_OFFER = '[My-Offers Page] SubscribeToOffer';

export const actions = {
    subscribeToOffer: createAction(
        SUBSCRIBE_TO_OFFER,
        props<{offerId: number}>()
    )
};
