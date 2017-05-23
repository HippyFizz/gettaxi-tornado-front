import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesManagmentComponent } from './rides-managment.component';

describe('RidesManagmentComponent', () => {
  let component: RidesManagmentComponent;
  let fixture: ComponentFixture<RidesManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
