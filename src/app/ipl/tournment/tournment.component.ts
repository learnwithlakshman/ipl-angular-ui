import { Component, OnInit } from '@angular/core';
import { IplserviceService } from '../iplservice.service';
import { TeamAmount } from 'src/app/shared/models/iplcommon.model';

@Component({
    selector: 'app-tournment',
    templateUrl: './tournment.component.html',
    styleUrls: ['./tournment.component.css']
})
export class TournmentComponent implements OnInit {

    teamAmount: TeamAmount[];



    constructor(private iplserviceService: IplserviceService) { }


    ngOnInit(): void {
        this.iplserviceService.amountSpentByAllTeams().subscribe(res => {
            this.teamAmount = res;
            console.log(this.teamAmount);
        });

    }

}
