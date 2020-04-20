import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FingerPage } from './finger.page';

describe('FingerPage', () => {
  let component: FingerPage;
  let fixture: ComponentFixture<FingerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FingerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
