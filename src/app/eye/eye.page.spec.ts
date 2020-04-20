import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EyePage } from './eye.page';

describe('EyePage', () => {
  let component: EyePage;
  let fixture: ComponentFixture<EyePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EyePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
