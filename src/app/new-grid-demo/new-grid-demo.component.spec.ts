import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGridDemoComponent } from './new-grid-demo.component';

describe('NewGridDemoComponent', () => {
  let component: NewGridDemoComponent;
  let fixture: ComponentFixture<NewGridDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGridDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
