import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

/* Fields components*/
import { MoneyReturnComponent } from './money-return/money-return.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ConfirmComponent } from './confirm/confirm.component';

/* Resolver */
import { WorkFlowResolver }   from './app-routing-resolver.service'; 
 
export const appRoutes: Routes= [
    // default
    { path: '',   redirectTo: '/request', pathMatch: 'full'},
    // 1st State
    { path: 'request',  component: MoneyReturnComponent },
    // 2nd State
    { path: 'personal',  component: PersonalInfoComponent, resolve: {workFlow: WorkFlowResolver} },
    // 3rd State
    { path: 'confirm',  component: ConfirmComponent, resolve: {workFlow: WorkFlowResolver}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    WorkFlowResolver
  ]
})
export class AppRoutingModule {}