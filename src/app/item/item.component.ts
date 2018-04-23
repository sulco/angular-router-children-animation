import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from './item';
import { ItemsService } from '../items.service';
import { ItemsRoutingService } from '../items/items-routing.service';

@Component({
  selector: 'ts-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  item: Item;

  constructor(route: ActivatedRoute,
              itemsService: ItemsService,
              itemsRouting: ItemsRoutingService) {
    const { index } = route.snapshot.params;

    this.item = itemsService.getItemByIndex(index);

    itemsRouting.itemChange$.next(+index);
  }

}
