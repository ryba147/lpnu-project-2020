import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsEventComponent } from './comments-event.component';

describe('CommentsEventComponent', () => {
  let component: CommentsEventComponent;
  let fixture: ComponentFixture<CommentsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
