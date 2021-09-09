import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  input: any
  @Input()label: string
  @Input()errorMessage: string

  @ContentChild(NgModel) model: NgModel //Pega uma referência da classe pai ao elemento que estamos vinculando


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){ //Este método vai ser chamado quando o conteúdo que vai ficar no lugar de NgContent for definido
    this.input = this.model
    if(this.input === undefined){
      throw new Error("Este componente precisa ser utilizado com uma diretiva ngModel")
    }
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.invalid.dirty || this.input.invalid.touched);
  }

  hasSucces(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }


}
