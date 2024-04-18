import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerFooterComponent } from './planner-footer.component';

describe('PlannerFooterComponent', () => {
  let component: PlannerFooterComponent;
  let fixture: ComponentFixture<PlannerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannerFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
