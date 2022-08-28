import { Component, OnInit } from '@angular/core';

import { Person } from 'src/app/person';

@Component({
  selector: 'app-example-application-interfaces',
  templateUrl: './example-application-interfaces.component.html',
  styleUrls: ['./example-application-interfaces.component.css']
})
export class ExampleApplicationInterfacesComponent implements OnInit {

  people: Person[] = [       //people: object[] = [    é muito amplo utilizar o object para tipar
    {id: 1, name: "Caio", genre: "Masculino",age: 24 },
    {id: 2, name: "Henrique", genre: "Masculino", age: 15},
    {id: 3, name: "Gustavo", genre: "Masculino",age: 35},
    {id: 4, name: "Nívea", genre: "Feminino", age: 24},
  ];

  personDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(person: Person): void{    //POR SER RELACIONADO AO DOM E APENAS VISUAL O RETORNO PODE SER VOID (VÁZIO)
    this.personDetails = `A pessoa denominada ${person.name} tem ${person.age} ano(s)!`;
  }

}
