import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './auth-routing';
import {SigninService} from './signin/signin.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rootRouterConfig),
  ],
  providers: [SigninService]
})
export class AuthModule { }
