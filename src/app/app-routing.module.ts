import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {DiagramsComponent} from "./diagrams/diagrams.component";
import {NewComponent} from "./diagrams/new/new.component";
import {ShowComponent} from "./diagrams/show/show.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'diagrams', children: [
    {path: '', component: DiagramsComponent},
    {path: 'new', component: NewComponent},
    {path: ':diagramId', component: ShowComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
