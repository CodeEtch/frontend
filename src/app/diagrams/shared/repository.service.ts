import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class RepositoryService {

  constructor(private http: Http) {
  }


  importRepository(repository: Repository, token: string): Observable<any> {
      let headers = new Headers();
      headers.append('Authorization',`token ${token}`);
    return this.http
        .post(`${environment.base_api_url}/repositories`, {
          owner: repository.owner.login,
          name: repository.name,
          branch: 'master'
        }, {headers})
        .map(this.extractData);
  }

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
