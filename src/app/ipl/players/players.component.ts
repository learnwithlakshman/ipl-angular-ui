import { IplserviceService } from './../iplservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/shared/models/player.model';
import { MaxAmountByRolePlayer } from 'src/app/shared/models/iplcommon.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private iplserviceService: IplserviceService) { }

  isLoaded: boolean;

  displayedColumns: string[] = ['name', 'role', 'label', 'price'];

  dataSource = new MatTableDataSource<Player>(this.getAllPlayersData());

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  maxPayedPlayers: MaxAmountByRolePlayer[] = [];

  maxPayedBowler: Player[];

  maxPayedBatsman: Player[];

  maxPayedAllRounder: Player[];

  maxPayedWicketKeeper: Player[];

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.maxAmountByRole();
  }

  getAllPlayersData(): any {
    this.iplserviceService.allPlayerDetails().subscribe(res => {
      this.dataSource.data = res;
      if (this.dataSource.data.length > 0) {
        this.isLoaded = true;
      }
      return res;
    });
  }

  maxAmountByRole() {
    this.iplserviceService.maxAmountPlayerByRole().subscribe(res => {
      this.maxPayedPlayers = res;
      this.maxPayedPlayers.forEach(ele => {
        const role = ele.role;
        const players = ele.players;
        if (role === 'All-Rounder') {
          this.maxPayedAllRounder = players;
        } else if (role === 'Bowler') {
          this.maxPayedBowler = players;
        } else if (role === 'Wicket Keeper') {
          this.maxPayedWicketKeeper = players;
        } else {
          this.maxPayedBatsman = players;
        }
      });
    });
  }

}


