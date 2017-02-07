import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {ClassInfo} from "../class-info.model";
import {AttributeInfo} from "../attribute-info.model";
import {MethodService} from "../method.service";
import {ReferenceInfo} from "../reference-info.model";
import {ReferenceService} from "../reference.service";

@Component({
  selector: 'app-class-diagram',
  templateUrl: './class-diagram.component.html',
  styleUrls: ['./class-diagram.component.css']
})
export class ClassDiagramComponent implements OnInit {
  @Input() classInfo: ClassInfo;
  methodInfos: MethodInfo[];
  attributeInfos: AttributeInfo[];
  @Output() newInfoEmmiter: EventEmitter<ReferenceInfo[]> = new EventEmitter();

  constructor(private methodService: MethodService, private refinfoService: ReferenceService) {
  }

  ngOnInit() {

    this.methodService
        .getMethods(this.classInfo.uuid)
        .subscribe((methodInfos) => {
          this.methodInfos = methodInfos;
          methodInfos.forEach((methodInfo)=>{
            this.refinfoService
                .getReferences(methodInfo.uuid)
                .subscribe((refInfos)=>{
                  this.newInfoEmmiter.emit(refInfos);
                })

          })
        });

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
