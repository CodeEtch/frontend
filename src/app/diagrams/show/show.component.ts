import {Component, OnInit, ElementRef, HostListener} from "@angular/core";
import {ClassInfo} from "../shared/class-info.model";
import {ReferenceInfo} from "../shared/reference-info.model";
import {RepositoryService} from "../shared/repository.service";
import {ClassService} from "../shared/class.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  classInfos: ClassInfo[];
  refInfos: ReferenceInfo[];
  windowWidth: number;
  windowHeight: number;

  constructor(private el: ElementRef, private route: ActivatedRoute, private classService: ClassService) {
  }

  ngOnInit() {
    this.refInfos = [];
    // this.classInfos = [
    //   {
    //     "name": "HelloWorld",
    //     "path": "/test/main",
    //     "file_name": "main",
    //     "uuid": "7a7c0c30-eb80-11e6-9ae0-4d981379eb9f",
    //     "createdAt": "2017-02-05T08:52:52.467Z",
    //     "updatedAt": "2017-02-05T08:52:52.467Z",
    //     "repo_uuid": "7a534e80-eb80-11e6-9ae0-4d981379eb9f"
    //   },
    //   {
    //     "name": "Test1",
    //     "path": "/test/Test1",
    //     "file_name": "Test1",
    //     "uuid": "7a7d1da0-eb80-11e6-9ae0-4d981379eb9f",
    //     "createdAt": "2017-02-05T08:52:52.474Z",
    //     "updatedAt": "2017-02-05T08:52:52.474Z",
    //     "repo_uuid": "7a534e80-eb80-11e6-9ae0-4d981379eb9f"
    //   }
    // ];
    //
    // this.refInfos = [
    //   {
    //     "uuid": "7a940100-eb80-11e6-9ae0-4d981379eb9f",
    //     "createdAt": "2017-02-05T08:52:52.624Z",
    //     "updatedAt": "2017-02-05T08:52:52.624Z",
    //     "class_uuid": "7a7d1da0-eb80-11e6-9ae0-4d981379eb9f",
    //     "method_uuid": "7a8f4610-eb80-11e6-9ae0-4d981379eb9f"
    //   }
    // ];

    // this.repositoryService.getRepository('codeetch', 'backend')
    //     .subscribe((repository) => {
    //       let repoId = repository['uuid'];
    //       console.log(repoId);
    //       this.classService
    //           .getClasses(repoId)
    //           .subscribe((infos) => {
    //             this.classInfos = infos;
    //           })
    //     })

    this.route
        .params
        .subscribe((params)=>{
      let diagramId = params['diagramId'];
          this.classService
              .getClasses(diagramId)
              .subscribe((infos) => {
                this.classInfos = infos;
              })
    });



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

  appendNewInfos(infos) {
    this.refInfos = this.refInfos.concat(infos);
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.windowWidth = document.documentElement.clientWidth;
    this.windowHeight = document.documentElement.clientHeight;
  }
}
