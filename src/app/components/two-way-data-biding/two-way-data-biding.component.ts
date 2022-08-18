import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-biding',
  templateUrl: './two-way-data-biding.component.html',
  styleUrls: ['./two-way-data-biding.component.css']
})
export class TwoWayDataBidingComponent implements OnInit {

  name:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
