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
      // {
      //   name: 'Sleeping',
      //   joyIcon: 'assets/joy-icons/sleeping.png',
      //   category: 'Well-Being',
      //   notes: ''
      // },
      // {
      //   name: 'Meditating',
      //   joyIcon: 'assets/joy-icons/meditating.png',
      //   category: 'Well-Being',
      //   notes: ''
      // },
      // {
      //   name: 'Surfing',
      //   joyIcon: 'assets/joy-icons/surfing.png',
      //   category: 'Sports',
      //   notes: ''
      // },
      // {
      //   name: 'Badminton',
      //   joyIcon: 'assets/joy-icons/badminton.png',
      //   category: 'Sports',
      //   notes: ''
      // },
      // {
      //   name: 'Tennis',
      //   joyIcon: 'assets/joy-icons/tennis.png',
      //   category: 'Sports',
      //   notes: ''
      // },
      // {
      //   name: 'Go',
      //   joyIcon: 'assets/joy-icons/go.png',
      //   category: 'Board Game',
      //   notes: ''
      // },
      // {
      //   name: 'Valentines',
      //   joyIcon: 'assets/joy-icons/valentines.png',
      //   category: 'Holiday',
      //   notes: ''
      // },
      // {
      //   name: 'Partying',
      //   joyIcon: 'assets/joy-icons/partying.png',
      //   category: 'Social',
      //   notes: ''
      // },
      {
        name: 'Basketball',
        joyIcon: 'assets/joy-icons/basketball.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Fishing',
        joyIcon: 'assets/joy-icons/fishing.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Bowling',
        joyIcon: 'assets/joy-icons/bowling.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'BBQ',
        joyIcon: 'assets/joy-icons/bbq.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Photography',
        joyIcon: 'assets/joy-icons/photography.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Piano',
        joyIcon: 'assets/joy-icons/piano.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Boating',
        joyIcon: 'assets/joy-icons/boating.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Camping',
        joyIcon: 'assets/joy-icons/camping.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Gaming',
        joyIcon: 'assets/joy-icons/gaming.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Ping Pong',
        joyIcon: 'assets/joy-icons/ping-pong.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Soccer',
        joyIcon: 'assets/joy-icons/soccer.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Botany',
        joyIcon: 'assets/joy-icons/botany.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Lifting',
        joyIcon: 'assets/joy-icons/lifting.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Painting',
        joyIcon: 'assets/joy-icons/painting.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Reading',
        joyIcon: 'assets/joy-icons/reading.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Drama',
        joyIcon: 'assets/joy-icons/drama.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Journaling',
        joyIcon: 'assets/joy-icons/journaling.png',
        category: 'Sports',
        notes: ''
      },
      {
        name: 'Stargazing',
        joyIcon: 'assets/joy-icons/stargazing.png',
        category: 'Sports',
        notes: ''
      },
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
