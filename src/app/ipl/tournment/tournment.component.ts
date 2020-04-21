import { Player } from './../../shared/models/player.model';
import { Component, OnInit } from '@angular/core';
import { IplserviceService } from '../iplservice.service';
import { TeamAmount } from 'src/app/shared/models/iplcommon.model';
import { GoogleChartInterface } from 'ng2-google-charts';


@Component({
    selector: 'app-tournment',
    templateUrl: './tournment.component.html',
    styleUrls: ['./tournment.component.css']
})
export class TournmentComponent implements OnInit {

    teamAmount: TeamAmount[] = [];

    players: Player[] = [];

    public columnChart: GoogleChartInterface;
    public pieChart: GoogleChartInterface;

    constructor(private iplserviceService: IplserviceService) { }


    ngOnInit(): void {
        this.iplserviceService.amountSpentByAllTeams().subscribe(res => {
            this.teamAmount = res;
            this.teamAmount = this.teamAmount.sort((team1, team2) => team1.amount - team2.amount);

            let columnChartData = [];

            columnChartData.push(['Team', 'Amount Spent']);

            this.teamAmount.forEach(ele => {
                columnChartData.push([ele.teamName, ele.amount]);
            });
           // this.displayColumnChart(columnChartData);
        });

        this.iplserviceService.allPlayerDetails().subscribe(res => {
            this.players = res;
            let roleCount = new Map();
            this.players.forEach(ele => {
                if (roleCount.has(ele.role)) {
                    let count = roleCount.get(ele.role);
                    roleCount.set(ele.role, count + 1);
                } else {
                    roleCount.set(ele.role, 1);
                }
            })

            let pieData = [];

            pieData.push(['Role', 'Count']);

            for (let [key, value] of roleCount.entries()) {
                pieData.push([key, value]);
            }

            this.displayPieChart(pieData);

        });


    }

    public displayColumnChart(data: any) {
        this.columnChart = {
            chartType: 'ColumnChart',
            dataTable: data,
            options: { title: 'Team and Amount' }
        };
    }


    public displayPieChart(data: any) {
        this.pieChart = {
            chartType: 'PieChart',
            dataTable: data,
            options: { title: 'Player and Count' }
        };
    }



}
