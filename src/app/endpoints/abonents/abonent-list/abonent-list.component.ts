import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Abonent} from "../../../data-types/abonent";
import {AbonentsService} from "../abonents.service";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Card} from "../../../data-types/card";
import {DatePipe} from "@angular/common";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-abonent-list',
  templateUrl: './abonent-list.component.html',
  styleUrls: ['./abonent-list.component.css'],
  providers: [DatePipe]
})
export class AbonentListComponent implements OnInit {

  constructor(private abonentService: AbonentsService, private router: Router, public datePipe: DatePipe) {


  }

  abonentList: Abonent[];

  dataSource: MatTableDataSource<Abonent>;
  displayedColumns: string[] = [`name`, `code`, `date`, `actions`];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
     this.getAbonentList();
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getAbonentList() {
    this.abonentService.getAbonentList().subscribe(data => {
        this.abonentList = data;
        //console.log(data);

        this.dataSource = new MatTableDataSource(this.abonentList);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.log(error)
    );
  }


  abonentDetails(id: number) {
    this.router.navigate(['abonent-details', id])
  }

  updateAbonent(id: number) {
    this.router.navigate(['update-abonent', id])
  }

  deleteAbonent(id: number) {
    this.abonentService.deleteAbonent(id).subscribe(data => {
      console.log(data);
      this.getAbonentList();
    })
  }


}
