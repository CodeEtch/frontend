import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class GithubService {

  private _accessToken: string;
  private _autorized: boolean;
  private _authorizationHeaders: Headers;

  constructor(private http: Http) {
  }

  isAutorized(): boolean {
    return this._autorized;
  }

  getRepositories(): Observable<any> {
    return this.http
        .get(`https://api.github.com/user/repos`, {headers: this._authorizationHeaders})
        .map(this.extractData);
  }

  authorize(code: string) {
    return this.http.get(`${environment.base_api_url}/oauth/authorize?code=${code}`)
        .map(this.extractData)
        .map((res) => {
          if (res) {
            this._autorized = true;
            this._accessToken = res.access_token;
            this._authorizationHeaders = new Headers();
            this._authorizationHeaders.append('Authorization', `token ${this._accessToken}`);
          }
        });
  }

  get accessToken(): string {
    return this._accessToken;
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body;
  }
}
