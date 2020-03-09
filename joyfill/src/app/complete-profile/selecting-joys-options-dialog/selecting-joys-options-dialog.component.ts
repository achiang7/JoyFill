import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecting-joys-options-dialog',
  templateUrl: './selecting-joys-options-dialog.component.html',
  styleUrls: ['./selecting-joys-options-dialog.component.scss'],
})
export class SelectingJoysOptionsDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<SelectingJoysOptionsDialogComponent>,
    private router: Router,
  ) { }

  ngOnInit() {}

  goJoySearchBar() {
    this.dialogRef.close();
    this.router.navigate(['complete-profile/joy-search-bar']);
    console.log('Navigating to Joy Search Bar.');
  }

  goJoyEval() {
    this.dialogRef.close();
    console.log('Joyfill MVP currently does not support Joy Eval.');
  }

}
