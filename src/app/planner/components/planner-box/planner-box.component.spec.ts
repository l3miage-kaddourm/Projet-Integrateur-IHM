import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerBoxComponent } from './planner-box.component';

describe('PlannerBoxComponent', () => {
  let component: PlannerBoxComponent;
  let fixture: ComponentFixture<PlannerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannerBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
