import {Component, OnInit, ElementRef} from '@angular/core';
import {ClassInfo} from "../shared/class-info.model";
import {ReferenceInfo} from "../shared/reference-info.model";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  classInfos: ClassInfo[];
  refInfos: ReferenceInfo[];
  constructor(private el: ElementRef) { }

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

    this.refInfos = [
      {
        "uuid": "7a940100-eb80-11e6-9ae0-4d981379eb9f",
        "createdAt": "2017-02-05T08:52:52.624Z",
        "updatedAt": "2017-02-05T08:52:52.624Z",
        "class_uuid": "7a7d1da0-eb80-11e6-9ae0-4d981379eb9f",
        "method_uuid": "7a8f4610-eb80-11e6-9ae0-4d981379eb9f"
      }
    ];
  }

  getMethodAndClassEl(refInfo: ReferenceInfo) {
    let classId = refInfo.class_uuid,
        methodId = refInfo.method_uuid;
    let methodEl = this.el.nativeElement.querySelector(`[data-method-id="${methodId}"]`),
        classEl = this.el.nativeElement.querySelector(`[data-class-id="${classId}"]`);
    return {methodEl, classEl};
  }

  isToLeft(els) {
    return els.methodEl.offsetLeft + els.methodEl.offsetWidth < els.classEl.offsetLeft;
  }

  getStartX(refInfo: ReferenceInfo) {
    let els = this.getMethodAndClassEl(refInfo);
    let clientRect = els.methodEl.getBoundingClientRect();

    return this.isToLeft(els) ?
        clientRect.right + 5 :
        clientRect.left - 5;
  }

  getStartY(refInfo: ReferenceInfo) {
    let els = this.getMethodAndClassEl(refInfo);
    let clientRect = els.methodEl.getBoundingClientRect();

    return clientRect.bottom + 17;
  }

  getEndX(refInfo: ReferenceInfo) {
    let els = this.getMethodAndClassEl(refInfo);
    let clientRect = els.classEl.getBoundingClientRect();

    return this.isToLeft(els) ?
        (clientRect.left - 11) :
        (clientRect.right + 11);
  }
  getEndY(refInfo: ReferenceInfo) {
    let els = this.getMethodAndClassEl(refInfo);
    let clientRect = els.classEl.getBoundingClientRect();

    return (clientRect.top + clientRect.bottom) / 2.0;
  }
}
