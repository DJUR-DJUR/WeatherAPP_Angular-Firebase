import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherForDay } from '../../interfaces/interfaces';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayComponent {

  @Input()
  public local: string = '';

  @Input()
  public currentDay!: WeatherForDay;

  @Input()
  public isActive: boolean = false;

}
