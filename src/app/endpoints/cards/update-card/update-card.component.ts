import {Component, OnInit} from '@angular/core';
import {Card} from "../../../data-types/card";
import {CardService} from "../card.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {

  id: number;
  card: Card = new Card();

  constructor(private cardService: CardService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];


  }

}
