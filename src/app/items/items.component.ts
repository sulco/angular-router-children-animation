import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Item } from '../item/item';
import { RouterAnimations } from '../animations/router.animation';
import { RouterOutlet } from '@angular/router';
import { ItemsService } from '../items.service';

@Component({
  selector: 'ts-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  animations: [
    RouterAnimations.routeSlide
  ]
})
export class ItemsComponent {
  items: Item[] = [];
  currentIndex: number;
  linkNext: number;
  linkPrev: number;

  constructor(itemsService: ItemsService) {
    this.items = itemsService.getItems();
  }

  getState(outletRef: RouterOutlet) {
    const newIndex = outletRef.activatedRoute.snapshot.params.index;
    const offsetEnter = newIndex > this.currentIndex
      ? 100
      : -100;
    this.currentIndex = newIndex;
    return {
      value: outletRef.activatedRoute.snapshot.params.index,
      params: {
        offsetEnter,
        offsetLeave: -offsetEnter
      }
    };
  }
}
