import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MaterialModule } from 'src/app/material/material.module';
import { TeamsComponent } from 'src/app/modules/teams/teams.component';
import { PlayersComponent } from 'src/app/modules/players/players.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    TeamsComponent,
    PlayersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class DefaultModule { }
