import * as fromMyOffers from '../actions/my-offers.actions';
import {State as OfferState} from '../reducers/offer.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Offer} from '../../shared/models/offer.model';

export interface State {
    entities: [] | number[];
}

export const initialState: State = {
    entities: [],
};

export function reducer(state: State = initialState, action) {
    switch (action.type) {
        case fromMyOffers.SUBSCRIBE_TO_OFFER:
            return {
                entities: [...state.entities, action.offerId]
            };
        default:
            return state;
    }
}

// Selectors
export const selectMyOffersFeature = createFeatureSelector('my_offers');
export const selectOffersFeature = createFeatureSelector('offers');
export const selectMyOffers = createSelector(
    selectMyOffersFeature,
    selectOffersFeature,
    (myOffers: State, offers: OfferState) => {
        return offers.entities.filter((offer: Offer) => {
            return myOffers.entities.some(myOfferId => myOfferId === offer.id);
        });
    }
);
