import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-signup-redirect-dialog',
  templateUrl: './post-signup-redirect-dialog.component.html',
  styleUrls: ['./post-signup-redirect-dialog.component.scss'],
})
export class PostSignupRedirectDialogComponent implements OnInit {

  constructor(
    private router: Router, 
    private dialogRef: MatDialogRef<PostSignupRedirectDialogComponent>,

  ) { }

  ngOnInit() {}

  goCompleteProfilePage() {
    this.dialogRef.close();
    this.router.navigate(['/complete-profile']);
  }
}
