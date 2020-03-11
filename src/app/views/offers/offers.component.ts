import { Component, OnInit } from '@angular/core';
import { OffersApiService } from '../../shared/services/backend-api/offers-api.service';
import { Offer } from '../../shared/models/offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  public offers: Offer[] = [];

  constructor(private offersApi: OffersApiService) {
  }

  ngOnInit() {
    this.offersApi.getOffers()
      .subscribe(offers => {
        this.offers = offers;
      });
  }
}
