import { RoleCount } from './../../shared/models/iplcommon.model';
import { IplserviceService } from './../iplservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Player } from 'src/app/shared/models/player.model';
import { GoogleChartInterface } from 'ng2-google-charts';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private iplService: IplserviceService) { }

  teamLabels: string[];

  selectedLabel: string;

  teamPlayers: Player[] = [];

  teamPlayersByRole: Player[] = [];

  roleCount: RoleCount[] = [];

  pieChart: GoogleChartInterface;

  displayedColumns: string[] = ['name', 'role', 'label', 'price'];

  dataSource = new MatTableDataSource<Player>(this.teamPlayers);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.iplService.labelsInfromation().subscribe(res => {
      this.teamLabels = res.labels;
    });
    this.dataSource.paginator = this.paginator;

  }

  onLabelChange() {
    this.iplService.playerDetailsByTeam(this.selectedLabel).subscribe(res => {
      this.teamPlayers = res;
      this.dataSource.data = res;
    });

    let pieChartData = [];
    this.iplService.roleCountByTeam(this.selectedLabel).subscribe(res => {
      this.roleCount = res;
      console.log(this.roleCount);
      pieChartData.push(['Role', 'Count']);
      this.roleCount.forEach(ele => {
        pieChartData.push([ele.roleName, ele.count]);
      });
      this.showPieChart(pieChartData);
    });

  }

  showPieChart(data: any) {
    this.pieChart = {
      chartType: 'PieChart',
      dataTable: data,
      options: { title: `${this.selectedLabel} Role Count `, width: 600, height: 400 }
    };
  }

  showTeamPlayersInfoByRole(event) {
    let role = event.selectedRowValues[0];
    this.iplService.playerDetailsByTeamAndRole(this.selectedLabel, role).subscribe(res => {
      this.teamPlayersByRole = res;
    });
  }

}
