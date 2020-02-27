import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app-routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './shared/inmemory-db/inmemory-db.service';
import { ApiService } from './shared/services/api.service';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  declarations: [AppComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
