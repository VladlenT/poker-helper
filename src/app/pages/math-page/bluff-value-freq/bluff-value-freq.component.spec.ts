import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluffValueFreqComponent } from './bluff-value-freq.component';

describe('BluffValueFreqComponent', () => {
  let component: BluffValueFreqComponent;
  let fixture: ComponentFixture<BluffValueFreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluffValueFreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluffValueFreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
