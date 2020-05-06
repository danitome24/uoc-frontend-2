import {NgModule} from '@angular/core';

import {SigninRoutingModule} from './signin-routing.module';
import {SigninComponent} from './signin.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {SigninService} from './signin.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [SigninComponent],
    imports: [
        SharedModule,
        SigninRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [SigninService]
})
export class SigninModule {
}
