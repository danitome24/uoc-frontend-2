import {Component, OnInit} from '@angular/core';
import {Offer} from 'src/app/shared/models/offer.model';
import {select, Store} from '@ngrx/store';
import * as fromMyOffers from '../reducers/my-offers.reducer';
import * as fromOffer from '../actions/offer.actions';

@Component({
    selector: 'app-offers-profile',
    templateUrl: './offers-profile.component.html'
})
export class OffersProfileComponent implements OnInit {
    offers: Offer[] = [];
    private offers$;

    constructor(private store: Store) {
        this.selectOffers();
    }

    private selectOffers() {
        this.store.dispatch(fromOffer.actions.listOffers({}));
        this.offers$ = this.store.pipe(
            select(fromMyOffers.selectMyOffers),
        );
    }

    ngOnInit() {
    }
}
