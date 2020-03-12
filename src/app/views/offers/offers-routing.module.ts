import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { UserResolver } from '../../shared/resolvers/user.resolver';
import { OffersDetailsComponent } from './offers-detail/offers-details.component';
import { OfferResolver } from '../../shared/resolvers/offer.resolver';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent,
    resolve: { user: UserResolver }
  },
  {
    path: ':offerid/detail',
    component: OffersDetailsComponent,
    resolve: { offer: OfferResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule {
}
