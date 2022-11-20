import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isActive: Boolean = false;

  toggle () {
    this.isActive = !this.isActive;
  }

  @HostListener('window:resize', ['$event.target'])
  detectWindowSize(window: Window) {
    if (window.innerWidth > 1023) {
      this.isActive = false;
    }
  }
}
