import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCountComponent } from './task-count.component';

describe('TaskCountComponent', () => {
  let component: TaskCountComponent;
  let fixture: ComponentFixture<TaskCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCountComponent]
    });
    fixture = TestBed.createComponent(TaskCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
