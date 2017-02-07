import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class MethodService {

  constructor(private http: Http) {

  }

  getMethods(classId: string): Observable<MethodInfo[]> {
    return this.http
        .get(`${environment.base_api_url}/classes/${classId}/methods`)
        .map(this.extractData);
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }
}
