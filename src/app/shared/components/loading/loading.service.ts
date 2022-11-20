import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isShown = false;
  
  public get status() {
    return this.isShown;
  }

  show(callback?: any, seconds = 30) {
    this.isShown = true;

    setTimeout(() => {
      this.hide();
      if (typeof callback == 'function') {
        callback();
      }
    }, seconds * 1000);
  }

  hide() {
    this.isShown = false;
  }
}
