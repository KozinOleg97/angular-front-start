import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Card} from "../../../data-types/card";
import {CardService} from "../card.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatButtonModule} from '@angular/material/button';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [DatePipe]
})
export class CardListComponent implements OnInit {


  constructor(private cards_service: CardService, private router: Router, public datePipe: DatePipe) {

  }

  cardList: Card[];

  dataSource: MatTableDataSource<Card>;
  displayedColumns: string[] = [`name`, `code`, `inventory_number`, `date`, `date_of_issue`, `actions`];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(): void {
    this.getCardList();

  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  private getCardList() {
    this.cards_service.getCardList().subscribe(data => {
        this.cardList = data;

        this.dataSource = new MatTableDataSource(this.cardList);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

         // console.log(data);
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
      // console.log(data);
      this.getCardList();
    })
  }


}



