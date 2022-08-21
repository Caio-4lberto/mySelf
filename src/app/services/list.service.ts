import { Injectable } from '@angular/core';

import { Item } from '../items';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor() { }

  remove(items: Item[], item: Item) {
    return items.filter((a) => item.name !== a.name);
  }
}
