import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennaDetailsComponent } from './antenna-details.component';

describe('AntennaDetailsComponent', () => {
  let component: AntennaDetailsComponent;
  let fixture: ComponentFixture<AntennaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AntennaDetailsComponent]
    });
    fixture = TestBed.createComponent(AntennaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
