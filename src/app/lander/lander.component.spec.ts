import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanderComponent } from './lander.component';

describe('LanderComponent', () => {
  let component: LanderComponent;
  let fixture: ComponentFixture<LanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
