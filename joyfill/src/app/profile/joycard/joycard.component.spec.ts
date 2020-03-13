import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoycardComponent } from './joycard.component';

describe('JoycardComponent', () => {
  let component: JoycardComponent;
  let fixture: ComponentFixture<JoycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoycardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
