import { Component, OnInit } from '@angular/core';
import {ClassInfo} from "../shared/class-info.model";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  classInfos: ClassInfo[];
  constructor() { }

  ngOnInit() {
    this.classInfos = [
      {
        "name": "HelloWorld",
        "path": "/test/main",
        "file_name": "main",
        "uuid": "7a7c0c30-eb80-11e6-9ae0-4d981379eb9f",
        "createdAt": "2017-02-05T08:52:52.467Z",
        "updatedAt": "2017-02-05T08:52:52.467Z",
        "repo_uuid": "7a534e80-eb80-11e6-9ae0-4d981379eb9f"
      },
      {
        "name": "Test1",
        "path": "/test/Test1",
        "file_name": "Test1",
        "uuid": "7a7d1da0-eb80-11e6-9ae0-4d981379eb9f",
        "createdAt": "2017-02-05T08:52:52.474Z",
        "updatedAt": "2017-02-05T08:52:52.474Z",
        "repo_uuid": "7a534e80-eb80-11e6-9ae0-4d981379eb9f"
      }
    ];
  }

}
