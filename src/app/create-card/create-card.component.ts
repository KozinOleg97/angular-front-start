import {Component, OnInit} from '@angular/core';
import {Card} from "../DataTypes/card";
import {CardService} from "../card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  card: Card = new Card();

  constructor(private cardService: CardService, private router: Router) {
  }

  ngOnInit(): void {
  }

  saveCard() {
    this.cardService.createCard(this.card).subscribe(data => {
        console.log(data);
        this.goToCardList();
      },
      error => console.log(error));
  }

  goToCardList() {
    this.router.navigate(['/cards']);
  }

  onSubmit() {
    console.log(this.card);
    this.saveCard();
  }


}
