import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandGridDemoComponent } from './expand-grid-demo.component';

describe('ExpandGridDemoComponent', () => {
  let component: ExpandGridDemoComponent;
  let fixture: ComponentFixture<ExpandGridDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandGridDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
