import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ItemsRoutingService {
  itemChange$ = new BehaviorSubject<number>(0);
}
