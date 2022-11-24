import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

export interface CardModalButton {
  text: string;
  clazz?: string;
  disabled?: boolean;
  onClick?: (obj?: any) => void;
  onClose?: () => void;
}

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent {
  @Input()
  title: string = "";

  @Input()
  content?: string;

  @Input()
  buttons: CardModalButton[] = [
    {
      text: "Cancel"
    },
    {
      text: "Submit",
      clazz: "is-primary"
    }
  ];

  @Input()
  status: boolean = false;

  @Output()
  statusChange = new EventEmitter<boolean>();

  close() {
    this.status = false;
    this.statusChange.emit(this.status);
  }

  executeCallback(index: number) {
    const callback = this.buttons[index].onClick;
    if (callback != null) {
      callback();
    }

    this.close();
    const onClose = this.buttons[index].onClose;
    if (onClose != null) {
      onClose();
    }
  }


  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(_event: KeyboardEvent) {
    if (this.status) {
      this.close();
    }
  }
}
