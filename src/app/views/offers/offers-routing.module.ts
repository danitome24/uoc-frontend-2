import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers.component';
import { UserResolver } from '../../shared/resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: OffersComponent,
    resolve: { user: UserResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule { }
