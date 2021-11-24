import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Abonent} from "../../../data-types/abonent";
import {IMultiSelectSettings, IMultiSelectTexts} from "ngx-bootstrap-multiselect";
import {AbonentsService} from "../abonents.service";

@Component({
  selector: 'app-abonent-add-dialog',
  templateUrl: './abonent-add-dialog.component.html',
  styleUrls: ['./abonent-add-dialog.component.css']
})
export class AbonentAddDialogComponent implements OnInit {

  constructor(
    private abonentService: AbonentsService,
    private dialogRef: MatDialogRef<AbonentAddDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public abonent: Abonent
  ) {
  }


  abonents: Abonent[];

  optionsModel: number[];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'checkboxes',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };

// Text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select',
    allSelected: 'All selected',
  };


  ngOnInit(): void {
    this.dialogRef.updateSize(`30%`,`40%`)

    this.abonentService.getAbonentList().subscribe(data => {
      this.abonents = data
      //this.myOptions = data
    })
  }

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.optionsModel);
  }

  onChange() {

  }
}
