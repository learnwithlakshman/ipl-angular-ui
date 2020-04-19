import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginComponent } from './auth/login/login.component'
import {MaterialModule} from './material/material.module';
import { TournmentComponent } from './ipl/tournment/tournment.component';
import { TeamsComponent } from './ipl/teams/teams.component';
import { PlayersComponent } from './ipl/players/players.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TournmentComponent,
    TeamsComponent,
    PlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
