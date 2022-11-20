import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule as CoreComponentsModule } from './core/components/components.module';
import { Feature1Module } from './features/feature1/feature1.module';
import { HomeModule } from './features/home/home.module';
import { LoadingService } from './shared/components/loading/loading.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreComponentsModule,
    HomeModule,
    Feature1Module
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router, private loadingService: LoadingService) {
    // Router hooking & show/hide loading
    this.router.events
    .pipe(
      filter(event => [NavigationStart, NavigationEnd, NavigationError].some(specficEvent => event instanceof specficEvent))
    )
    .subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
      } else {
        this.loadingService.hide();
      }
    });
  }
}
