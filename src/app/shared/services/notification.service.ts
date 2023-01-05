import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  duration = 6000;
  buttonText = 'ok';

  constructor(private snackBar: MatSnackBar) { }

  public throwError(message: string): void {
    this.openSnackBar(`Error: ${message}`, this.buttonText);
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: this.duration,
      verticalPosition: this.verticalPosition,
    });
  }
}
