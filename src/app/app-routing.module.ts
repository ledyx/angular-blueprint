import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature1Component } from './features/feature1/feature1.component';
import { Page1Component as Feature1Page1Component } from './features/feature1/pages/page1/page1.component';
import { Page2Component as Feature1Page2Component } from './features/feature1/pages/page2/page2.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "feature1", component: Feature1Component,
    children: [
      { path: "page1", component: Feature1Page1Component },
      { path: "page2", component: Feature1Page2Component },
      { path: '', redirectTo: 'page1', pathMatch: 'full' },
      { path: "**", redirectTo: '' }
    ]
  },
  { path: "**", redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
