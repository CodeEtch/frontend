import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {GithubService} from "../shared/github.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  repositories: Repository[];

  constructor(private route: ActivatedRoute, private githubServie: GithubService) {
    // this.route
    //     .queryParams
    //     .switchMap((params: Params) => this.githubServie
    //     .getRepositories(params['code']))
    //     .subscribe(repo => {
    //       console.log(repo)
    //     })

  }

  ngOnInit() {
    this.repositories = [
      {name: 'CodeEtch/design'},
      {name: 'CodeEtch/api'},
      {name: 'CodeEtch/frontend'}
    ]
  }

}
