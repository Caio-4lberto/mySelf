import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Person } from 'src/app/person';

import { ListService } from 'src/app/services/list.service'

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person?: Person;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAll()
   }

  ngOnInit(): void {
  }

  getAll() {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getDetails(id).subscribe((person) => (this.person = person));
  }
}
