import { RadioOption } from './RadioOption';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  constructor() { }

  @Input() options: RadioOption []

  value: any

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
  }

}
