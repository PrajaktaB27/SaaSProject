import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuediligenceComponent } from './duediligence.component';

describe('DuediligenceComponent', () => {
  let component: DuediligenceComponent;
  let fixture: ComponentFixture<DuediligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuediligenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuediligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
