import {Component, OnInit} from '@angular/core';
import {Card} from "../DataTypes/card";
import {CardService} from "../card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cardList: Card[];

  constructor(private cardservice: CardService, private router: Router) {
  }


  ngOnInit(): void {
    this.getCardList();
  }

  private getCardList() {
    this.cardservice.getCardList().subscribe(data => {
      this.cardList = data
    })
  }
}
