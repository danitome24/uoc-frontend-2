import {createFeatureSelector} from '@ngrx/store';
import {Offer} from '../../shared/models/offer.model';
import * as fromOffer from '../actions/offer.actions';

export interface State {
    entities: [] | [Offer];
}

export const initialState: State = {
    entities: [],
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromOffer.LIST_OFFERS_SUCCESS:
            return {
                ...state,
                entities: action.offers
            };
        default:
            return state;
    }
}

// Selectors

export const selectAuthFeature = createFeatureSelector('offers');
