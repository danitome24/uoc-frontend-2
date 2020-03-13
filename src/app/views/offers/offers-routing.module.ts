import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { UserResolver } from '../../shared/resolvers/user.resolver';
import { OffersDetailsComponent } from './offers-detail/offers-details.component';
import { OfferResolver } from '../../shared/resolvers/offer.resolver';
import { MyJobComponent } from './my-job/my-job.component';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent,
    resolve: { user: UserResolver }
  },
  {
    path: 'detail',
    component: OffersDetailsComponent,
    resolve: { offer: OfferResolver }
  },
  {
    path: 'my-job',
    component: MyJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule {
}
