import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserJoymapPage } from './user-joymap.page';

describe('UserJoymapPage', () => {
  let component: UserJoymapPage;
  let fixture: ComponentFixture<UserJoymapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserJoymapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserJoymapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
