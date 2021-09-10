import { RadioOption } from './RadioOption';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() options: RadioOption []

  value: any

  onChange: any

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value)
  }

  writeValue(obj: any): void { //Método que vai ser chamado pelas diretivas quando elas quiserem passar um valor para este componente
    this.value = obj;
  }

  registerOnChange(fn: any): void { //As diretivas passam uma função pra gente que tem que ser chamada sempre que o valor interno do componente mudar
    this.onChange = fn
  }

  registerOnTouched(){

  }
}
