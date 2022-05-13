import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamarketplaceComponent } from './metamarketplace.component';

describe('MetamarketplaceComponent', () => {
  let component: MetamarketplaceComponent;
  let fixture: ComponentFixture<MetamarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetamarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetamarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
