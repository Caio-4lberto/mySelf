import { Component, OnInit } from '@angular/core';

import { Person } from 'src/app/person';

@Component({
  selector: 'app-example-application-interfaces',
  templateUrl: './example-application-interfaces.component.html',
  styleUrls: ['./example-application-interfaces.component.css']
})
export class ExampleApplicationInterfacesComponent implements OnInit {

  people: Person[] = [       //people: object[] = [    é muito amplo utilizar o object para tipar
    {name: "Caio", genre: "Masculino",age: 24 },
    {name: "Henrique", genre: "Masculino", age: 15},
    {name: "Gustavo", genre: "Masculino",age: 35},
    {name: "Nívea", genre: "Feminino", age: 24},
  ];

  personDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(person: Person){
    this.personDetails = `A pessoa denominada ${person.name} tem ${person.age} ano(s)!`;
  }

}
