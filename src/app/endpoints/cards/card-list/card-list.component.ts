import {Component, OnInit} from '@angular/core';
import {Card} from "../../../data-types/card";
import {CardService} from "../card.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {


  constructor(private cards_service: CardService, private router: Router) {
  }

  cardList: Card[];
  dataSource: MatTableDataSource<Card[]>;

  displayedColumns: string[] = [`name`, `code`, `inventory_number`, `date`, `date_of_issue` ];

  ngOnInit(): void {
    this.getCardList();
    this.dataSource.data = this.cardList;

  }

  private getCardList() {
    this.cards_service.getCardList().subscribe(data => {
        this.cardList = data;
        console.log(data);
      }, error => console.log(error)
    );
  }

  cardDetails(id: number) {
    this.router.navigate(['card-details', id])
  }

  updateCard(id: number) {
    this.router.navigate(['update-card', id])
  }

  deleteCard(id: number) {
    this.cards_service.deleteCard(id).subscribe(data => {
      console.log(data);
      this.getCardList();
    })
  }

}


