import {Component, OnInit} from "@angular/core";
import {RepositoryService} from "./shared/repository.service";

@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.css']
})
export class DiagramsComponent implements OnInit {

  diagrams: Diagram[];

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.diagrams = [];

    this.repositoryService
        .getRepositories()
        .subscribe((diagrams) => {
          this.diagrams = diagrams;
        });
  }

}
