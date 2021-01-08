import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneeventComponent } from './oneevent.component';

describe('OneeventComponent', () => {
  let component: OneeventComponent;
  let fixture: ComponentFixture<OneeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
