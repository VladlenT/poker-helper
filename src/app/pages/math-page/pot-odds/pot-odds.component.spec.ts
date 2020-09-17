import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotOddsComponent } from './pot-odds.component';

describe('PotOddsComponent', () => {
  let component: PotOddsComponent;
  let fixture: ComponentFixture<PotOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
