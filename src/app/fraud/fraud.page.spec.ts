import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FraudPage } from './fraud.page';

describe('FraudPage', () => {
  let component: FraudPage;
  let fixture: ComponentFixture<FraudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FraudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
