import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.css']
})
export class DiagramsComponent implements OnInit {

  diagrams: Diagram[];

  constructor() { }

  ngOnInit() {
    this.diagrams = [
      {name: 'CodeEtch/design'},
      {name: 'CodeEtch/api'},
      {name: 'CodeEtch/frontend'}
    ]
  }

}
