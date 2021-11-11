import {Component, OnInit} from '@angular/core';
import {AbonentsService} from "../abonents.service";
import {Router} from "@angular/router";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {Abonent} from "../../../data-types/abonent";

@Component({
  selector: 'app-create-abonent',
  templateUrl: './create-abonent.component.html',
  styleUrls: ['./create-abonent.component.css']
})
export class CreateAbonentComponent implements OnInit {

  constructor(private abonentService: AbonentsService, private router: Router, private localeService: BsLocaleService) {
  }


  abonent: Abonent = new Abonent();


  allowSubmit: boolean = false;


  ngOnInit(): void {
    this.localeService.use(`ru`)
    this.abonent.date = new Date();
  }

  onSubmit() {

    this.saveAbonent()
  }

  saveAbonent() {
    this.abonentService.createAbonent(this.abonent).subscribe(data => {
        console.log(`Создан абонент с id = ` + data);
        this.goToAbonentList();
      },
      error => console.log(error)
    )
    ;
  }

  goToAbonentList() {
    this.router.navigate(['/abonents']);
  }

  onChange() {
    if (this.abonent.code != null
      && this.abonent.date != null
    ) {

      this.allowSubmit = true;
    }
  }
}
