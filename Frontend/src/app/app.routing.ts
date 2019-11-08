import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './componentes/components.component';
import { ComponentsModule } from './componentes/components.module'
import { ProfileComponent } from './componentes/profile/profile.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { LandingComponent } from './componentes/landing/landing.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'afiliate', component: ComponentsModule},
  { path: 'home', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  //{ path: 'nucleoicons', component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
