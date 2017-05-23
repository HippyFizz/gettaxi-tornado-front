import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesManagmentComponent } from './companies-managment.component';

describe('CompaniesManagmentComponent', () => {
  let component: CompaniesManagmentComponent;
  let fixture: ComponentFixture<CompaniesManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
