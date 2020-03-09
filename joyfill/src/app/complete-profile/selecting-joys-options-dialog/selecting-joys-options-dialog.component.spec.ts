import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectingJoysOptionsDialogComponent } from './selecting-joys-options-dialog.component';

describe('SelectingJoysOptionsDialogComponent', () => {
  let component: SelectingJoysOptionsDialogComponent;
  let fixture: ComponentFixture<SelectingJoysOptionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectingJoysOptionsDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectingJoysOptionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
