import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilVideoComponent } from './accueil-video.component';

describe('AccueilVideoComponent', () => {
  let component: AccueilVideoComponent;
  let fixture: ComponentFixture<AccueilVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
