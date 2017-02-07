import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class RepositoryService {

  constructor(private http: Http) {
  }


  // getRepository(userName: string, repoName: string): Observable<string> {
  //   return this.http
  //       .get(`${environment.base_api_url}/repositories/${userName}/${repoName}/master`)
  //       .map(this.extractData);
  // }

  getRepositories(): Observable<any> {
    return this.http
        .get(`${environment.base_api_url}/repositories`)
        .map(this.extractData);
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }
}
