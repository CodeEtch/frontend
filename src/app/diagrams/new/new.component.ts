import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  repositories: Repository[];
  constructor() { }

  ngOnInit() {
    this.repositories = [
      {name: 'CodeEtch/design'},
      {name: 'CodeEtch/api'},
      {name: 'CodeEtch/frontend'}
    ]
  }

}
