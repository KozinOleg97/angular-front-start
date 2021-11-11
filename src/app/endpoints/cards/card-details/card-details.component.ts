import {Component, OnInit} from '@angular/core';
import {CardService} from "../card.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../../../data-types/card";


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  id: number;
  card: Card;



  constructor(private card_service: CardService, private curRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.id = this.curRoute.snapshot.params["id"];

    this.card = new Card();
    this.card_service.getCardById(this.id).subscribe(data => {
      this.card = data;
    });

  }





}
