import { IplserviceService } from './../iplservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/shared/models/player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private iplserviceService: IplserviceService) { }

  displayedColumns: string[] = ['name', 'role', 'label', 'price'];

  dataSource = new MatTableDataSource<Player>(this.getAllPlayersData());

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  getAllPlayersData(): any {
    this.iplserviceService.allPlayerDetails().subscribe(res => {
      this.dataSource.data = res;
      return res;
    });
  }

}


