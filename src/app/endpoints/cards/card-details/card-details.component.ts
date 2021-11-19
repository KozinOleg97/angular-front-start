import {Component, OnInit} from '@angular/core';
import {CardService} from "../card.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../../../data-types/card";
import {IMultiSelectSettings, IMultiSelectTexts} from "ngx-bootstrap-multiselect";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {AbonentsService} from "../../abonents/abonents.service";
import {Abonent} from "../../../data-types/abonent";


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  id: number;
  card: Card;
  abonents: Abonent[];
  allowSubmit: boolean;

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

  constructor(
    private card_service: CardService,
    private curRoute: ActivatedRoute,
    private localeService: BsLocaleService,
    private abonentService: AbonentsService) {
  }


  ngOnInit(): void {
    this.id = this.curRoute.snapshot.params["id"];

    this.card = new Card();
    this.card_service.getCardById(this.id).subscribe(data => {
      this.card = data;
    });


    this.localeService.use(`ru`);


    this.abonentService.getAbonentList().subscribe(data => {
      this.abonents = data
      //this.myOptions = data
    })

    this.card.date_of_issue = new Date();
    this.card.date = new Date();
    // @ts-ignore
    this.card.doc = new Document();


  }


  onChange() {

  }

  onSubmit() {

  }

  handleFileChange($event: Event) {


  }
}
