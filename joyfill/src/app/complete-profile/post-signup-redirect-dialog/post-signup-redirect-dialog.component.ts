import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BasicUserInfoDialogComponent } from '../basic-user-info-dialog/basic-user-info-dialog.component';

@Component({
  selector: 'app-post-signup-redirect-dialog',
  templateUrl: './post-signup-redirect-dialog.component.html',
  styleUrls: ['./post-signup-redirect-dialog.component.scss'],
})
export class PostSignupRedirectDialogComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PostSignupRedirectDialogComponent>,
  ) { }

  ngOnInit() {}

  goCompleteProfilePage() {
    this.dialogRef.close();

    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.height = '80%';
    // dialogConfig.width = '35%';
    // dialogConfig.disableClose = true;
    // // dialogConfig.panelClass = 'my-panel'; used for styling the dialog?

    // const basicInfoDialogRef = this.dialog.open(BasicUserInfoDialogComponent, dialogConfig);
    this.router.navigate(['/complete-profile']);
  }
}
