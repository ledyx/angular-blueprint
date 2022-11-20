import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface InputState {
  icon: string,
  message: string,
  clazz?: string
}

@Component({
  selector: 'app-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  label?: string;

  @Input()
  value: any;

  @Output()
  valueChange = new EventEmitter<any>();

  @Input()
  type: string = 'string';

  @Input()
  icon?: string;

  @Input()
  valid: InputState = {
    icon: "fas fa-check",
    message: "",
    clazz: "is-success"
  };

  @Input()
  invalid: InputState = {
    icon: "fas fa-exclamation-triangle",
    message: "A numeric input is required.",
    clazz: "is-danger"
  };

  @Output()
  statusChanges = new EventEmitter<boolean>();

  valueFormControl = new FormControl(null, [Validators.required]);
  isValid = true;

  ngOnInit(): void {
    this.valueFormControl.statusChanges.subscribe(status => {
      const currentStatus = status.toLowerCase() == 'valid';
      this.isValid = currentStatus;
      this.statusChanges.emit(this.isValid);
    });

    this.valueFormControl.valueChanges.subscribe(value => {
      this.valueChange.emit(value as any);
    });

    this.valueFormControl.setValue(this.value);
    this.valueChange.emit(this.value);
  }

  get status() {
    return this.isValid ? this.valid : this.invalid;
  }
}
