import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input()
  public currentLocal = 'en';
  public dateNow = new Date();
  public greetingEn = '';
  public greetingUk = '';
  private subscription!: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date())
      )
      .subscribe(time => {
        this.dateNow = time;
        let currentHour = time.getHours();

        switch (true) {
          case currentHour >= 5 && currentHour < 11:
            this.greetingEn = 'Good Morning!!!';
            this.greetingUk = 'Доброго ранку!!!'
            break;
          case currentHour >= 11 && currentHour < 17:
            this.greetingEn = 'Good Afternoon!!!';
            this.greetingUk = 'Доброго дня!!!';
            break;
          case currentHour >= 17 && currentHour < 23:
            this.greetingEn = 'Good Evening!!!';
            this.greetingUk = 'Добрий вечір!!!';
            break;
          case currentHour >= 23 || currentHour < 5:
            this.greetingEn = 'Good Night!!!';
            this.greetingUk = 'Доброї ночі!!!';
            break;
        };
        this.cd.detectChanges();
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
