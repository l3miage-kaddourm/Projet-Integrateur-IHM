import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerLayoutComponent } from './planner-layout.component';

describe('PlannerLayoutComponent', () => {
  let component: PlannerLayoutComponent;
  let fixture: ComponentFixture<PlannerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannerLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
