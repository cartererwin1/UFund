import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NeedsComponent } from './needs/needs.component';
import { NeedDetailComponent } from './need-detail/need-detail.component';
import { LoginComponent } from './login/login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { BasketComponent } from './basket/basket.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { DonationHistoryComponent } from './donatehistory/donatehistory.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: 'detail/:id', component: NeedDetailComponent },
  { path: 'needs', component: NeedsComponent },
  { path: 'adminpage', component: AdminpageComponent},
  { path: 'basketpage', component: BasketComponent},
  { path: 'admin/detail/:id', component: AdminDetailComponent },
  { path: 'historypage', component: DonationHistoryComponent }



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}