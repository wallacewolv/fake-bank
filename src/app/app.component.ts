import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'fake-bank';

  constructor(
    public dialog: MatDialog
    ) {}

    openDialog() {
      const dialogRef = this.dialog.open(AppComponent, {
        height: '350px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
