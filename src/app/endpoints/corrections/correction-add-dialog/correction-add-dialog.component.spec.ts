import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionAddDialogComponent } from './correction-add-dialog.component';

describe('CorrectionAddDialogComponent', () => {
  let component: CorrectionAddDialogComponent;
  let fixture: ComponentFixture<CorrectionAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
