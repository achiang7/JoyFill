import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecting-joys-options-dialog',
  templateUrl: './selecting-joys-options-dialog.component.html',
  styleUrls: ['./selecting-joys-options-dialog.component.scss'],
})
export class SelectingJoysOptionsDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<SelectingJoysOptionsDialogComponent>,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {}

  goJoySearchBar() {
    this.dialogRef.close();
    this.router.navigate(['complete-profile/joy-search-bar']);
    console.log('Navigating to Joy Search Bar.');
  }

  goJoyEval() {
    this.openSnackBar('Joyfill MVP currently does not support Joy Eval.', 'Dismiss');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
