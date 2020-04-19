import { TeamsComponent } from './ipl/teams/teams.component';
import { PlayersComponent } from './ipl/players/players.component';
import { LoginComponent } from './auth/login/login.component';
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
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'tournmnet',
        component: TournmentComponent
      },
      {
        path: 'login',
        component: LoginComponent
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
