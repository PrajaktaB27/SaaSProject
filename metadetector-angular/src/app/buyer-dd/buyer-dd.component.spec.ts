import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDDComponent } from './buyer-dd.component';

describe('BuyerDDComponent', () => {
  let component: BuyerDDComponent;
  let fixture: ComponentFixture<BuyerDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerDDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
