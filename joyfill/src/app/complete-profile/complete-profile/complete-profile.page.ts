import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BasicUserInfoDialogComponent } from '../basic-user-info-dialog/basic-user-info-dialog.component';


@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.page.html',
  styleUrls: ['./complete-profile.page.scss'],
})
export class CompleteProfilePage implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '80%';
    dialogConfig.width = '35%';
    dialogConfig.disableClose = true;
    // dialogConfig.panelClass = 'my-panel'; used for styling the dialog?

    const basicInfoDialogRef = this.dialog.open(BasicUserInfoDialogComponent, dialogConfig);
    // check whether the use has already completed the set up profile flow, if not, open the popup
  }

}
