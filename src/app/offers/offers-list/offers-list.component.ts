import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import {select, Store} from '@ngrx/store';
import * as fromOffer from '../actions/offer.actions';
import * as fromAuth from '../../auth/reducers/auth.reducer';
import * as fromOfferSelects from '../reducers/offer.reducer';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html'
})
export class OffersListComponent implements OnInit {
  offersStudy: Offer[] = [];
  offersOther: Offer[] = [];
  private offers$;
  constructor(
    private profileService: ProfileService,
    private offersService: OffersService,
    private store: Store
  ) {
    this.selectOffers();
  }

  private selectOffers() {
    this.store.dispatch(fromOffer.actions.listOffers({}));

    /*const studiesOfUser$ = this.store.pipe(
        select(fromAuth.selectUserStudies),
    );*/
    // const offersOfUser = this.profileService.user.offers;

    this.offers$ = this.store.pipe(
        select(fromOfferSelects.selectOffersByUserStudies),
    );
    this.offersOther = [];
    this.offersStudy = [];
    /*this.offersOther = this.offersService.offers.filter(offer =>
      studiesOfUser.every(study => study.uid !== offer.category.uid)
    );*/
  }

  ngOnInit() {}
}
