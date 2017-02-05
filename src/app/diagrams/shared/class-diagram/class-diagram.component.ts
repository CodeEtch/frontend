import {Component, OnInit, Input} from '@angular/core';
import {ClassInfo} from "../class-info.model";
import {AttributeInfo} from "../attribute-info.model";

@Component({
  selector: 'app-class-diagram',
  templateUrl: './class-diagram.component.html',
  styleUrls: ['./class-diagram.component.css']
})
export class ClassDiagramComponent implements OnInit {
  @Input() classInfo: ClassInfo;
  methodInfos: MethodInfo[];
  attributeInfos: AttributeInfo[];

  constructor() { }

  ngOnInit() {
    this.methodInfos = [
      {
        "name": "main",
        "type": "constructor",
        "uuid": "7a8f4610-eb80-11e6-9ae0-4d981379eb9f",
        "createdAt": "2017-02-05T08:52:52.593Z",
        "updatedAt": "2017-02-05T08:52:52.593Z",
        "class_uuid": "7a7c0c30-eb80-11e6-9ae0-4d981379eb9f"
      },
      {
        "name": "test_function",
        "type": "int",
        "uuid": "7a8f4611-eb80-11e6-9ae0-4d981379eb9f",
        "createdAt": "2017-02-05T08:52:52.593Z",
        "updatedAt": "2017-02-05T08:52:52.593Z",
        "class_uuid": "7a7c0c30-eb80-11e6-9ae0-4d981379eb9f"
      }
    ];

    this.attributeInfos = [
      {
        "name": "String name"
      },
      {
        "name": "String description"
      }
    ];
  }

}
