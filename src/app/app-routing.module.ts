import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ProjectsComponent } from './components/projects/projects.component';

// const routes: Routes = [
//   {
//     component: HomeComponent,
//     path: "home",

//   },
//   {
//     component: AboutComponent,
//     path: "about",
    
//   },
//   {
//     component: OverviewComponent,
//     path: "overview",
    
//   },
//   {
//     component: ProjectsComponent,
//     path: "projects",
    
//   }
// ]

@NgModule({
  declarations: [],
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
  imports: [],
  exports: []
})
export class AppRoutingModule { }
