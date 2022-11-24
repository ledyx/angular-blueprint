import { Component } from '@angular/core';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { CardModalButton } from 'src/app/shared/components/modal/card-modal/card-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  inputValue: any = 3;
  isValidInput = true;

  modalStatus: boolean = false;
  buttons: CardModalButton[] = [
    {
      text: "Cancel"
    },
    {
      text: "Submit",
      clazz: "is-primary"
    }
  ];

  buttonsCopy: any;

  constructor(private loadingService: LoadingService) {
    this.buttonsCopy = JSON.parse(JSON.stringify(this.buttons));
  }

  showLoadingBar() {
    this.loadingService.show(() => alert('Hello, world!'), this.inputValue);
  }

  statusChange(isValid: boolean) {
    this.isValidInput = isValid;
  }
}
