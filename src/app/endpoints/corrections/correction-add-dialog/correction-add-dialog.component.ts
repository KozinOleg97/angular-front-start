import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Correction} from "../../../data-types/correction";

@Component({
  selector: 'app-correction-add-dialog',
  templateUrl: './correction-add-dialog.component.html',
  styleUrls: ['./correction-add-dialog.component.css']
})
export class CorrectionAddDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CorrectionAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public correction: Correction) {


  }


  ngOnInit(): void {

  }

  close() {
    this.dialogRef.close();
  }

  submit() {
  this.dialogRef.close(this.correction);
  }

  handleFileChange(event: any) {

    this.correction.file = event.target.files[0];

  }
}
