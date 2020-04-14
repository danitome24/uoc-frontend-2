import * as fromMyOffers from '../actions/my-offers.actions';

export interface State {
    entities: [] | [number];
}

export const initialState: State = {
    entities: [],
};

export function reducer(state: State = initialState, action) {
    switch (action.type) {
        case fromMyOffers.SUBSCRIBE_TO_OFFER:
            return {
                ...state
            };
    }
}
