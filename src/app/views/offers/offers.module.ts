import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers/offers.component';
import { OffersDetailsComponent } from './offers-detail/offers-details.component';
import { MyJobComponent } from './my-job/my-job.component';

@NgModule({
  declarations: [OffersComponent, OffersDetailsComponent, MyJobComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
  ]
})
export class OffersModule { }
