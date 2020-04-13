import {createFeatureSelector, createSelector} from '@ngrx/store';
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
export const selectOfferFeature = createFeatureSelector('offers');
export const selectUserFeature = createFeatureSelector('auth');
export const selectOffersByUserStudies = createSelector(
    selectOfferFeature,
    selectUserFeature,
    (offerState: State, userState: State) => {
        return  offerState.entities.filter((offer) => {
            return userState.user.studies.some(study => study.uid === offer.category.uid);
        });
    }
);
export const selectOffersNotMatchingUserStudies = createSelector(
    selectOfferFeature,
    selectUserFeature,
    (offerState: State, userState: State) => {
        return  offerState.entities.filter((offer) => {
            return userState.user.studies.every(study => study.uid !== offer.category.uid);
        });
    }
);
