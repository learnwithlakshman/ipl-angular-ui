import { Player } from 'src/app/shared/models/player.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-players-template',
  templateUrl: './players-template.component.html',
  styleUrls: ['./players-template.component.css']
})
export class PlayersTemplateComponent implements OnInit {

  displayedColumns: string[] = ['name', 'role', 'label', 'price'];

  // tslint:disable-next-line: no-input-rename
  @Input('players') players: Player[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
