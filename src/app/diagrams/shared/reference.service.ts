import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Response, Http} from "@angular/http";
import {ReferenceInfo} from "./reference-info.model";

@Injectable()
export class ReferenceService {


  constructor(private http: Http) {
  }

  getReferences(methodId: string): Observable<ReferenceInfo[]> {
    return this.http
        .get(`${environment.base_api_url}/methods/${methodId}/classrefs`)
        .map(this.extractData);
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }
}
