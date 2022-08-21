import { Component, OnInit } from '@angular/core';

import { Item } from 'src/app/items';

import { ListService } from 'src/app/services/list.service'; //IMPORTAR O SERVICE

@Component({
  selector: 'app-example-application-services',
  templateUrl: './example-application-services.component.html',
  styleUrls: ['./example-application-services.component.css']
})
export class ExampleApplicationServicesComponent implements OnInit {

  items: Item[] = [
    {name: "Shampoo", type: "Higiene"},
    {name: "Vassoura", type: "Limpeza"},
    {name: "Caderno", type: "Estudantil"},
  ];

  constructor(private listService: ListService) { }   //COM L MAIUSCULO É UMA CLASSSE/TIPO DO DADO

  ngOnInit(): void {}

  removeItem(item: Item){
    console.log("Removendo item...");
    this.items = this.listService.remove(this.items, item);
  }

}
