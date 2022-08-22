import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-application-http',
  templateUrl: './example-application-http.component.html',
  styleUrls: ['./example-application-http.component.css']
})
export class ExampleApplicationHttpComponent implements OnInit {

  people = [
    {name: "Caio", genre: "Masculino",age: 24 },
    {name: "Henrique", genre: "Masculino", age: 15},
    {name: "Gustavo", genre: "Masculino",age: 35},
    {name: "Nívea", genre: "Feminino", age: 24},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
