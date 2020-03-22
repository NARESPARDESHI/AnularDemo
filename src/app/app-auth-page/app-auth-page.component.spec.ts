import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthPageComponent } from './app-auth-page.component';

describe('AppAuthPageComponent', () => {
  let component: AppAuthPageComponent;
  let fixture: ComponentFixture<AppAuthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAuthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
