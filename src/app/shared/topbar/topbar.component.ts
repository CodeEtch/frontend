import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {GithubService} from "../../diagrams/shared/github.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  private client_id: string;
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.client_id = environment.client_id
  }

  isAutorized():boolean {
    return this.githubService.isAutorized();
  }

}
