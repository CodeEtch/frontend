import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GithubService} from "../shared/github.service";
import {RepositoryService} from "../shared/repository.service";
import {environment} from "../../../environments/environment";
import {Headers} from "@angular/http";

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

    repositories: Repository[];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private githubServie: GithubService,
                private repositoryService: RepositoryService) {

    }

    ngOnInit() {
        this.repositories = [];
        this.route
            .queryParams
            .subscribe((params: Params) => {
                let code = params['code'];
                if (!code && !this.githubServie.isAutorized()) {
                    this.router.navigate(['/']);
                } else {
                    let githubRepoObservable = this.githubServie.isAutorized() ?
                        this.githubServie.getRepositories() :
                        this.githubServie.authorize(params['code']).flatMap(() => this.githubServie.getRepositories());
                    githubRepoObservable.subscribe((repositories) => {
                        this.repositories =
                            repositories.filter((repository: Repository) =>
                            environment.repositoryLanguages.indexOf(repository.language) != -1);
                    });
                }
            })
    }

    importRepo(repository: Repository) {
        this.repositoryService.importRepository(repository, this.githubServie.accessToken)
            .subscribe((diagram: Diagram) => {
                this.router.navigate(['/', 'diagrams', diagram.uuid])
            });
    }

}
