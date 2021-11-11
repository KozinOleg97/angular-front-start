import {Component, OnInit} from '@angular/core';
import {Abonent} from "../../../data-types/abonent";
import {AbonentsService} from "../abonents.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-abonent-list',
  templateUrl: './abonent-list.component.html',
  styleUrls: ['./abonent-list.component.css']
})
export class AbonentListComponent implements OnInit {

  constructor(private abonentService: AbonentsService, private router: Router) {
  }

  abonentList: Abonent[];

  ngOnInit(): void {
    this.getAbonentList();
  }

  private getAbonentList() {
    this.abonentService.getAbonentList().subscribe(data => {
        this.abonentList = data;
        console.log(data);
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
