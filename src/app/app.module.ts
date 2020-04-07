import {AppComponent} from './app.component';
import {CoreModule} from './shared/core.module';
import {FakeBackendService} from './shared/inmemory-db/fake-backend.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {rootRouterConfig} from './app-routing';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
    imports: [
        SharedModule,
        CoreModule,
        RouterModule.forRoot(rootRouterConfig, {useHash: false}),
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
            dataEncapsulation: false
        }),
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            }
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
