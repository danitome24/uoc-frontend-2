import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/inmemory-db/inmemory-db.service';
import { UserApiService } from './shared/services/backend-api/user-api.service';
import { DashboardRoutingModule } from './views/dashboard/dashboard-routing.module';
import { ProfileRoutingModule } from './views/profile/profile-routing.module';
import { LogoutComponent } from './views/logout/logout.component';
import { CommonModule } from '@angular/common';
import { SigninModule } from './views/signin/signin.module';
import { OffersRoutingModule } from './views/offers/offers-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    InMemoryWebApiModule.forRoot(FakeBackendService),
    SigninModule,
    DashboardRoutingModule,
    ProfileRoutingModule,
    OffersRoutingModule,
    CommonModule
  ],
  declarations: [AppComponent, LogoutComponent],
  providers: [UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
