import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery: number
  @Input() itensValue: number

  constructor() { }

  ngOnInit() {
  }

  total(){
    return this.delivery + this.itensValue;
  }
}
