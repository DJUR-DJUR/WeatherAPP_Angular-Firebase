import { AfterContentInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherForDay } from '../../interfaces/interfaces';

@Component({
  selector: 'app-days-slider',
  templateUrl: './days-slider.component.html',
  styleUrls: ['./days-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaysSliderComponent implements AfterContentInit {

  @Input()
  public currentLocal!: string;

  @Input()
  public weatherDays!: WeatherForDay[];

  @Output()
  public onSelect = new EventEmitter<WeatherForDay>();

  private selectedItem!: WeatherForDay;

  ngAfterContentInit(): void {
    this.selectedItem = this.weatherDays[0];
  }

  onItemClick(item: WeatherForDay) {
    this.selectedItem = item;
    this.onSelect.emit(item);
  }

  isSelectedItem(item: WeatherForDay) {
    return this.selectedItem === item;
  }

}
