import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { ItemsComponent } from '../items/items.component';
import { ItemComponent } from '../item/item.component';
import { CustomReuseStrategy } from './route-reuse-strategy';

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'items', component: ItemsComponent,
    children: [
      {path: '', redirectTo: '0', pathMatch: 'full'},
      {path: ':index', component: ItemComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
