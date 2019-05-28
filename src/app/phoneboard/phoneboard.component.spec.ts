import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneboardComponent } from './phoneboard.component';

describe('PhoneboardComponent', () => {
  let component: PhoneboardComponent;
  let fixture: ComponentFixture<PhoneboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
