import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Response, Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class GithubService {

  constructor(private http: Http) {
  }

  // getRepositories(code: string) {
  //   console.log(`https://github.com/login/oauth/access_token?client_id=${environment.client_id}&client_secret=${environment.client_secret}&code=${code}`);
  //
  //     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
  //
  //     let url = `https://github.com/login/oauth/access_token?client_id=${environment.client_id}&client_secret=${environment.client_secret}&code=${code}`;
  //
  //     return this.http.post(url, {}, {headers: headers});
  // }
  //
  // private parseParams(queryString: string) {
  //   let params = {};
  //   queryString.split('&')
  //       .forEach((pair) => {
  //         let kv = pair.split('=');
  //         params[kv[0]] = kv[1];
  //       });
  //   console.log(params);
  //   return params;
  // }
  //
  // private extractData(res: Response): any {
  //   let body = res.json();
  //   return body || {};
  // }
}
