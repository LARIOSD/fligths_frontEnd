import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IUser } from 'src/app/domain/interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnChanges {
  @Input() userData: IUser[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('card components', this.userData);
  }
}
