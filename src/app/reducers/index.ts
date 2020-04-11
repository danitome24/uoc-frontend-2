import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {routerReducer} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';
import * as fromAuth from '../auth/reducers/auth.reducer';
import {AuthEffects} from '../auth/effects/auth.effects';
import * as fromConfig from '../profile/reducers/configuration.reducer';

export interface State {
    router;
    auth: fromAuth.State;
    preferences: fromConfig.State;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
    auth: fromAuth.reducer,
    preferences: fromConfig.reducer,
};

export const effects = [AuthEffects];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
