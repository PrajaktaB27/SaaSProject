import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDDComponent } from './seller-dd.component';

describe('SellerDDComponent', () => {
  let component: SellerDDComponent;
  let fixture: ComponentFixture<SellerDDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
