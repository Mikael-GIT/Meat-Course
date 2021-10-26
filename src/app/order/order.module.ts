import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { OrderComponent } from './order.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { NgModule } from '@angular/core';

const ROUTES: Routes = [
  {path: '', component: OrderComponent }
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [OrderItemsComponent, DeliveryCostsComponent, OrderComponent]
})
export class OrderModule { }
