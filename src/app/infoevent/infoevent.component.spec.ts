import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoeventComponent } from './infoevent.component';

describe('InfoeventComponent', () => {
  let component: InfoeventComponent;
  let fixture: ComponentFixture<InfoeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
