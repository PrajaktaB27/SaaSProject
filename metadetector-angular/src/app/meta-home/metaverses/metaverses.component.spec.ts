import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaversesComponent } from './metaverses.component';

describe('MetaversesComponent', () => {
  let component: MetaversesComponent;
  let fixture: ComponentFixture<MetaversesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaversesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaversesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
