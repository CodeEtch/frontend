import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ClassInfo} from "./class-info.model";
import {environment} from "../../../environments/environment";
import {Response, Http} from "@angular/http";

@Injectable()
export class ClassService {
  constructor(private http: Http) {

  }

  getClasses(repoUUID: string): Observable<ClassInfo[]> {
    return this.http
        .get(`${environment.base_api_url}/repositories/${repoUUID}/classes`)
        .map(this.extractData);
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }
}
