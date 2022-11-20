import { Component } from '@angular/core';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  inputValue: any = 3;
  isValidInput = true;

  constructor(private loadingService: LoadingService) { }

  showLoadingBar() {
    this.loadingService.show(() => alert('Hello, world!'), this.inputValue);
  }

  statusChange(isValid: boolean) {
    this.isValidInput = isValid
  }
}
