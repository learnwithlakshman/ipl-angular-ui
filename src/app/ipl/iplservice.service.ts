import { MaxAmountByRolePlayer, RoleCount, TeamAmount } from './../shared/models/iplcommon.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { TeamLabels, RoleAmount } from '../shared/models/iplcommon.model';
import { Team } from '../shared/models/team.model';
import { Player } from '../shared/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class IplserviceService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  labelsInfromation(): Observable<TeamLabels> {
    return this.http.get<TeamLabels>(`${this.apiUrl}labels`);
  }

  allTeamDetails(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}all`);
  }
  playerDetailsByTeam(teamLabel: string): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}${teamLabel}`);
  }
  playerDetailsByTeamAndRole(teamLabel: string, role: string): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}${teamLabel}/${role}`);
  }
  roleAmountByTeam(teamLabel: string): Observable<RoleAmount[]> {
    return this.http.get<RoleAmount[]>(`${this.apiUrl}amountbyrole/${teamLabel}`);
  }
  roleCountByTeam(teamLabel: string): Observable<RoleCount[]> {
    return this.http.get<RoleCount[]>(`${this.apiUrl}role/${teamLabel}`);
  }
  maxAmountPlayerByRole(): Observable<MaxAmountByRolePlayer[]> {
    return this.http.get<MaxAmountByRolePlayer[]>(`${this.apiUrl}maxamoutbyrole`);
  }

  allPlayerDetails(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}players/all`);
  }

  amountSpentByAllTeams(): Observable<TeamAmount[]> {
    return this.http.get<TeamAmount[]>(`${this.apiUrl}totalamount`);
  }
}
