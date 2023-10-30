import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetButton, IonicModule } from '@ionic/angular';
import { ITripCardType } from '../../shared/enums/trip-card.enum';
import { ActionSheetComponent } from '../action-sheet/action-sheet.component';
import { ITripCardState } from './trip-card.interfaces';

@Component({
  standalone: true,
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
  imports: [CommonModule, IonicModule, ActionSheetComponent],
})
export class TripCardComponent implements OnInit {
  @Input() type: ITripCardType;
  tripCardType = ITripCardType;

  @Input() actionButtons: ActionSheetButton[];
  @Input() actionHeader: string;
  @Input() showActionButtons: boolean = true;

  @Input() tripsInfo: ITripCardState[];
  @Input() userID: string;

  public isOpenCard: boolean[] = [];

  constructor() {}

  ngOnInit() {
    this.isOpenCard = new Array(this.tripsInfo.length).fill(false);
  }

  toggleCard(index: number) {
    this.isOpenCard[index] = !this.isOpenCard[index];
  }
}
