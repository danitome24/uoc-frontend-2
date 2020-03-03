import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserResolver } from '../../shared/resolvers/user.resolver';

const routes: Routes = [
  { path: ':id', component: ProfileComponent, resolve: { user: UserResolver } },
  { path: ':id/edit', component: EditProfileComponent, resolve: { user: UserResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
