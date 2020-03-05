import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostSignupRedirectDialogComponent } from './post-signup-redirect-dialog.component';

describe('PostSignupRedirectDialogComponent', () => {
  let component: PostSignupRedirectDialogComponent;
  let fixture: ComponentFixture<PostSignupRedirectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSignupRedirectDialogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostSignupRedirectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
