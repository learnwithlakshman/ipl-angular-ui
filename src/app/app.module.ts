import { LoginComponent } from './shared/auth/login/login.component';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { TournmentComponent } from './ipl/tournment/tournment.component';
import { TeamsComponent } from './ipl/teams/teams.component';
import { PlayersComponent } from './ipl/players/players.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    TournmentComponent,
    TeamsComponent,
    PlayersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    DefaultModule,
    MaterialModule,
    Ng2GoogleChartsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
