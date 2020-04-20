import { LoginComponent } from './shared/auth/login/login.component';
import { TeamsComponent } from './ipl/teams/teams.component';
import { PlayersComponent } from './ipl/players/players.component';

import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournmentComponent } from './ipl/tournment/tournment.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    redirectTo: '/login',

  },
  {
  
      path: 'login',
      component: LoginComponent
  
  },
  {
    path: 'ipl',
    component: DefaultComponent,
    children: [
      {
        path: 'tournmnet',
        component: TournmentComponent
      },
    
      {
        path: 'players',
        component: PlayersComponent
      }, {
        path: 'teams',
        component: TeamsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
