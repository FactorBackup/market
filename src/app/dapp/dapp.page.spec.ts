import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DappPage } from './dapp.page';

describe('DappPage', () => {
  let component: DappPage;
  let fixture: ComponentFixture<DappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DappPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
