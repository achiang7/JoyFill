import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class Joys {
  joys: any[] = [];

  // defaultJoys: any = {
  //   'name': 'Burt Bear',
  //   'joyIcon': 'assets/img/speakers/bear.jpg',
  //   'category': 'Burt is a Bear.',
  // };

  constructor() {
    const joys = [
      {
        name: 'Hiking',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Badminton',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Tennis',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Go',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Board Game',
        notes: ''
      },
      {
        name: 'Fishing',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Partying',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Social',
        notes: ''
      },
      {
        name: 'Valentines',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Holiday',
        notes: ''
      },
      {
        name: 'Sleeping',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Well-Being',
        notes: ''
      },
      {
        name: 'Meditating',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Well-Being',
        notes: ''
      },
      {
        name: 'Surfing',
        joyIcon: 'assets/img/speakers/bear.jpg',
        category: 'Sports',
        notes: ''
      }
    ];

    for (const joy of joys) {
      this.joys.push(joy);
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

  add(joy) {
    this.joys.push(joy);
  }

  delete(joy) {
    this.joys.splice(this.joys.indexOf(joy), 1);
  }
}
