import {Component, OnInit, ViewChild} from '@angular/core';
import {CardService} from "../card.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../../../data-types/card";
import {IMultiSelectSettings, IMultiSelectTexts} from "ngx-bootstrap-multiselect";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {AbonentsService} from "../../abonents/abonents.service";
import {Abonent} from "../../../data-types/abonent";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {DatePipe} from "@angular/common";
import {Correction} from "../../../data-types/correction";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CorrectionAddDialogComponent} from "../../corrections/correction-add-dialog/correction-add-dialog.component";
import {CorrectionsService} from "../../corrections.service";
import {Document} from "../../../data-types/document"
import {AbonentAddDialogComponent} from "../../abonents/abonent-add-dialog/abonent-add-dialog.component";
import {AbonentList} from "../../../data-types/abonent-list";


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
  providers: [DatePipe]
})
export class CardDetailsComponent implements OnInit {

  constructor(
    private cardService: CardService,
    private curRoute: ActivatedRoute,
    private correction_service: CorrectionsService,
    private localeService: BsLocaleService,
    private abonentService: AbonentsService,
    public datePipe: DatePipe,
    private router: Router,
    private dialog: MatDialog
  ) {
  }


  id: number;
  card: Card;
  abonentsForSelect: Abonent[];
  allowSubmit: boolean;

  optionsModel: number[];

//TODO Вынести таблицы в отдельные компоненты
  dataSourceAbonents: MatTableDataSource<Abonent>;
  displayedColumnsAbonents: string[] = [`name`, `code`, `date`, `actions`];

  dataSourceCorrections: MatTableDataSource<Correction>;
  displayedColumnsCorrections: string[] = [`name`, `code`, `date`, `actions`, `download`];

  @ViewChild('paginatorAbonents') paginatorAbonent: MatPaginator;
  @ViewChild('abonents', {read: MatSort, static: true}) sortAbonent: MatSort;

  @ViewChild('paginatorCorrections') paginatorCorrection: MatPaginator;
  @ViewChild('corrections', {read: MatSort, static: true}) sortCorrection: MatSort;


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
    this.id = this.curRoute.snapshot.params["id"];
    this.localeService.use(`ru`);


    this.card = new Card();

    this.getCardInfoByID();

    this.getAbonentListForSelect();


    this.card.date_of_issue = new Date();
    this.card.date = new Date();
    // @ts-ignore
    this.card.doc = new Document();


  }


  private getCardInfoByID() {
    this.cardService.getCardById(this.id).subscribe(data => {
        this.card = data;


        this.dataSourceAbonents = new MatTableDataSource(this.card.abonents);
        this.dataSourceAbonents.paginator = this.paginatorAbonent;
        this.dataSourceAbonents.sort = this.sortAbonent;


        this.dataSourceCorrections = new MatTableDataSource(this.card.corrections);
        this.dataSourceCorrections.paginator = this.paginatorCorrection;
        this.dataSourceCorrections.sort = this.sortCorrection;


      },
      error => console.log(error)
    );
  }

  private getAbonentListForSelect() {
    this.abonentService.getAbonentList().subscribe(data => {
      this.abonentsForSelect = data
      //this.myOptions = data
    })
  }

  applyFilterAbonent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAbonents.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceAbonents.paginator) {
      this.dataSourceAbonents.paginator.firstPage();
    }
  }


  applyFilterCorrection(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceCorrections.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceCorrections.paginator) {
      this.dataSourceCorrections.paginator.firstPage();
    }
  }


  openDialogAddCorrection(correction: Correction) {

    const dialogConfigCorrection = new MatDialogConfig();

    dialogConfigCorrection.disableClose = true;
    dialogConfigCorrection.autoFocus = true;
    dialogConfigCorrection.closeOnNavigation = true;

    dialogConfigCorrection.data = correction;

    const dialogRef = this.dialog.open(CorrectionAddDialogComponent, dialogConfigCorrection);

    /*
    Получаем данные из формы
     */
    dialogRef.afterClosed().subscribe(data => {

        //добавляем файл, затем создаём правку
        this.uploadFile(data);


        // console.log("Dialog output:", data)
      }
    );

  }

  private openDialogAddAbonent(abonent: Abonent) {
    const dialogConfigAbonent = new MatDialogConfig();

    dialogConfigAbonent.disableClose = true;
    dialogConfigAbonent.autoFocus = true;
    dialogConfigAbonent.closeOnNavigation = true;

    dialogConfigAbonent.data = abonent;

    const dialogRef = this.dialog.open(AbonentAddDialogComponent, dialogConfigAbonent);

    /*
    Получаем данные из формы(массив id абонентов)
     */
    dialogRef.afterClosed().subscribe(data => {

        console.log(data)

        let list: AbonentList = new AbonentList();
        list.abonent_ids = data;
        console.log(list.abonent_ids)
        //добавляем абонентов к карточке
        this.abonentService.addAbonentToCard(this.id, list);


        // console.log("Dialog output:", data)
      }
    );
  }


  abonentDetails(id: number) {
    this.router.navigate(['abonent-details', id])
  }

  onChange() {

  }

  onSubmit() {

  }

  handleFileChange($event: Event) {


  }

  correctionDetails(id: number) {

  }

  correctionDownloadFile(id: number) {


    window.location.href=`http://localhost:8080/api/v1/files/download/${id}`;

    // this.cardService.downloadFile(id).subscribe(blob => {
    //
    // })

    // this.cardService.downloadLargeFile(id).then(
    //   res => {
    //
    //     FileSaver.saveAs
    //     const filename = `file_download_${datetimestamp}.csv`;
    //     let blob = new Blob([res], {type: 'text/csv'});
    //     saveAs(blob, filename);
    //   },
    //   err => {
    //     alert("Error while downloading the file.");
    //     console.error(err);
    //   }
    // );


  }

  callAddCorrectionDialog() {
    let correction: Correction = new Correction();
    correction.doc = new Document();

    this.openDialogAddCorrection(correction)

  }

  callAddAbonentDialog() {
    let abonent: Abonent = new Abonent();

    this.openDialogAddAbonent(abonent);


  }


  private uploadFile(correctionData: Correction) {
    if (correctionData.file) {
      this.cardService.uploadFile(correctionData.file).subscribe(uploadData => {
        console.log(uploadData);


        correctionData.doc.id = uploadData.valueOf();


        //создать и привязать коррекцию
        this.createCorrection(correctionData)

      });

    }

  }

  private createCorrection(data: Correction) {
    this.correction_service.addCorrection(this.id, data).subscribe(data => {
        this.getCardInfoByID();
      },
      error => console.log(error)
    );
  }


}
