import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyReturnComponent } from './money-return.component';

describe('MoneyReturnComponent', () => {
  let component: MoneyReturnComponent;
  let fixture: ComponentFixture<MoneyReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
