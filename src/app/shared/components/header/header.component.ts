import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit{

  @Input()
  public currentLocal!: string;

  public dateNow = new Date;

  public greeting!: string;

  ngOnInit(): void {
    const timeNow = this.dateNow.getHours();
    if (timeNow >= 5 && timeNow < 11) {
      this.greeting = 'Good Morning!!!';
    } else if (timeNow >= 11 && timeNow < 17) {
      this.greeting = 'Good Afternoon!!!';
    } else if (timeNow >= 17 && timeNow < 23) {
      this.greeting = 'Good Evening!!!';
    } else if (timeNow >= 23 ||timeNow < 5) {
      this.greeting = 'Good Night!!!';
    };
  }

}
