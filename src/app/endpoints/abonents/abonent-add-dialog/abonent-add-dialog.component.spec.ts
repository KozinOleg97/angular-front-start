import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonentAddDialogComponent } from './abonent-add-dialog.component';

describe('AbonentAddDialogComponent', () => {
  let component: AbonentAddDialogComponent;
  let fixture: ComponentFixture<AbonentAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonentAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonentAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
