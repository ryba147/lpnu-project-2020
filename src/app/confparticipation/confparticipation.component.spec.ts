import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfparticipationComponent } from './confparticipation.component';

describe('ConfparticipationComponent', () => {
  let component: ConfparticipationComponent;
  let fixture: ComponentFixture<ConfparticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfparticipationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfparticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
