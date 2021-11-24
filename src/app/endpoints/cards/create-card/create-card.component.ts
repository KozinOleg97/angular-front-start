import {Component, OnInit} from '@angular/core';
import {Card} from "../../../data-types/card";
import {CardService} from "../card.service";
import {Router} from "@angular/router";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {error} from "@angular/compiler/src/util";
import {IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts} from "ngx-bootstrap-multiselect";
import {AbonentsService} from "../../abonents/abonents.service";
import {Abonent} from "../../../data-types/abonent";
import {Document} from "../../../data-types/document"

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  constructor(private cardService: CardService,
              private router: Router,
              private localeService: BsLocaleService,
              private abonentService: AbonentsService) {

  }


  card: Card = new Card();
  file?: File;
  allowSubmit: boolean = false;


  optionsModel: number[];

  abonents: Abonent[];

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
    this.localeService.use(`ru`);


    this.abonentService.getAbonentList().subscribe(data => {
      this.abonents = data
      //this.myOptions = data
    })

    this.card.date_of_issue = new Date();
    this.card.date = new Date();
    // @ts-ignore
    this.card.doc = new Document();


    //this.myOptions = this.abonents;


  }

  /*
  Отправляет прикреплённый файл, получает его id, отправляет форму
   */
  saveCard() {

    // @ts-ignore
    this.card.abonents = null;
    this.card.abonent_ids = this.optionsModel;


    /*
    Если файл прикреплён
     */
    if (this.file) {
      this.cardService.uploadFile(this.file).subscribe(uploadData => {

          this.card.doc.id = uploadData;
          console.log(`uploaded file id = ` + uploadData);

          this.createCard();

        },
        error => console.log(error)
      );
      /*
      Если файл не прикреплён
       */
    } else {
      this.cardService.createCard(this.card).subscribe(data => {


          console.log(`new card id = ` + data);
          this.goToCardList();
        },

        error => console.log(error)
      );
    }

  }

  goToCardList() {
    this.router.navigate(['/cards']);
  }

  onSubmit() {

    this.saveCard();
  }


  handleFileChange(event: any) {

    this.file = event.target.files[0];

  }

  /*
  Проверка формы на заполненость
   */

  onChange() {
    if (this.card.inventory_number != null
      && this.card.code != null
      && this.card.name != null) {

      this.allowSubmit = true;


    }
  }

  private createCard() {
    this.cardService.createCard(this.card).subscribe(data => {


        console.log(`new card id = ` + data);
        this.goToCardList();
      },
      //TODO добавить удаление загруженного файла при ошибке
      error => console.log(error)
    );
  }
}
