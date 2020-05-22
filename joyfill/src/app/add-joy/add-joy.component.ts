import { Component, OnInit } from '@angular/core';
import { JoyService } from '../services/joy.service';
import { Joy } from '../models/Joy';

@Component({
  selector: 'app-add-joy',
  templateUrl: './add-joy.component.html',
  styleUrls: ['./add-joy.component.scss'],
})
export class AddJoyComponent implements OnInit {
  joy: Joy = {
    name: '',
    category: '',
    icon: '',
    rank: 1,
    status: 100
  }

  constructor(private joyService: JoyService) { }

  ngOnInit() {}

  onSubmit() {
    if(this.joy.name != '' && this.joy.category != '') {
      if (this.joy.category == 'Sports') {
        this.joy.icon = '../assets/joy-icons/sports.png';
      } else if (this.joy.category == 'Gaming') {
        this.joy.icon = '../assets/joy-icons/gaming.png';
      } else if (this.joy.category == 'Arts') {
        this.joy.icon = '../assets/joy-icons/arts.png';
      } else if (this.joy.category == 'Social') {
        this.joy.icon = '../assets/joy-icons/social.png';
      } else if (this.joy.category == 'Wellness') {
        this.joy.icon = '../assets/joy-icons/wellness.png';
      } else { 
        this.joy.icon = '../assets/joy-icons/custom.png'
      }
      this.joyService.addJoy(this.joy);
      this.joy.name = '';
      this.joy.category = '';
      this.joy.icon = '';
    }
  }
}
