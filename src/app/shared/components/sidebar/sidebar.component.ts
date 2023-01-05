import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Location, WeatherForDay } from '../../interfaces/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

  @Input()
  public currentLocal: string = '';

  @Input()
  public currentDay!: WeatherForDay;

  @Input()
  public currentLocation!: Location;

}
