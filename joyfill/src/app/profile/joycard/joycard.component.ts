import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-joycard',
  templateUrl: './joycard.component.html',
  styleUrls: ['./joycard.component.scss'],
})
export class JoycardComponent implements OnInit {

  @Input() joy;

  constructor() { }

  ngOnInit() {}

  scheduleActivity() {
     // open dialog to schedule an activity for this joy
  }

}
