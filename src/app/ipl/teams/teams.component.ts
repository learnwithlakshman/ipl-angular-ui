import { IplserviceService } from './../iplservice.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private iplService: IplserviceService) { }

  teamLabels: string[];

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);

    this.iplService.labelsInfromation().subscribe(res => {
      this.teamLabels = res.labels;
      console.log(this.teamLabels);
    });

  }

  // TODO
  // Load Team data on select Team

}
