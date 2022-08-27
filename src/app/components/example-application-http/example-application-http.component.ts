import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-example-application-http',
  templateUrl: './example-application-http.component.html',
  styleUrls: ['./example-application-http.component.css']
})
export class ExampleApplicationHttpComponent implements OnInit {

  people: Person[] = [];

  constructor(private listService: ListService) {
    this.getPeople()
  }

  ngOnInit(): void {
  }

  getPeople(): void {
    this.listService.getAll().subscribe((people) => (this.people = people));
  }
}
