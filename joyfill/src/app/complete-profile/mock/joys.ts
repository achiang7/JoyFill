import { Injectable } from '@angular/core';

import { Joy } from '../model/joy';

@Injectable({
    providedIn: 'root'
})
export class Joys {
  joys: Joy[] = [];

  defaultJoys: any = {
    'name': 'Burt Bear',
    'profilePic': 'assets/img/speakers/bear.jpg',
    'about': 'Burt is a Bear.',
  };


  constructor() {
    const joys = [
      {
        'name': 'Burt Bear',
        'profilePic': 'assets/img/speakers/bear.jpg',
        'about': 'Burt is a Bear.'
      },
      {
        'name': 'Charlie Cheetah',
        'profilePic': 'assets/img/speakers/cheetah.jpg',
        'about': 'Charlie is a Cheetah.'
      },
      {
        'name': 'Donald Duck',
        'profilePic': 'assets/img/speakers/duck.jpg',
        'about': 'Donald is a Duck.'
      },
      {
        'name': 'Eva Eagle',
        'profilePic': 'assets/img/speakers/eagle.jpg',
        'about': 'Eva is an Eagle.'
      },
      {
        'name': 'Ellie Elephant',
        'profilePic': 'assets/img/speakers/elephant.jpg',
        'about': 'Ellie is an Elephant.'
      },
      {
        'name': 'Molly Mouse',
        'profilePic': 'assets/img/speakers/mouse.jpg',
        'about': 'Molly is a Mouse.'
      },
      {
        'name': 'Paul Puppy',
        'profilePic': 'assets/img/speakers/puppy.jpg',
        'about': 'Paul is a Puppy.'
      }
    ];

    for (const joy of joys) {
      this.joys.push(new Joy(joy));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.joys;
    }

    return this.joys.filter((joy) => {
      // tslint:disable-next-line: forin
      for (const key in params) {
        const field = joy[key];
        // tslint:disable-next-line: triple-equals
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return joy;
        // tslint:disable-next-line: triple-equals
        } else if (field == params[key]) {
          return joy;
        }
      }
      return null;
    });
  }

  add(joy: Joy) {
    this.joys.push(joy);
  }

  delete(joy: Joy) {
    this.joys.splice(this.joys.indexOf(joy), 1);
  }
}
