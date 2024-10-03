import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects based on newly created SalesPerson class
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Rick', 'Grimes', 'rick.grimes@walkingdead.com', 50000),
    new SalesPerson('Daryl', 'Dixon', 'daryl.dyxon@walkingdead.com', 90000),
    new SalesPerson('Sean', "O'Malley", 'sean.omalley@ufc.com', 110000),
    new SalesPerson('Alex', 'Pereira', 'alex.pereira@ufc.com', 670000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
