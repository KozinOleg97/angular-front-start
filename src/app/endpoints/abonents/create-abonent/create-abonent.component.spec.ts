import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAbonentComponent } from './create-abonent.component';

describe('CreateAbonentComponent', () => {
  let component: CreateAbonentComponent;
  let fixture: ComponentFixture<CreateAbonentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAbonentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAbonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
