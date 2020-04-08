import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './auth-routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rootRouterConfig),
  ]
})
export class AuthModule { }
