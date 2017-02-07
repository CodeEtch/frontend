import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {TopbarComponent} from "./shared/topbar/topbar.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomepageComponent} from "./homepage/homepage.component";
import {DiagramsComponent} from "./diagrams/diagrams.component";
import {CardComponent} from "./shared/card/card.component";
import {NewComponent} from "./diagrams/new/new.component";
import {ShowComponent} from "./diagrams/show/show.component";
import {ClassDiagramComponent} from "./diagrams/shared/class-diagram/class-diagram.component";
import {ConnectorComponent} from "./diagrams/shared/connector/connector.component";
import {RepositoryService} from "./diagrams/shared/repository.service";
import {ClassService} from "./diagrams/shared/class.service";
import {MethodService} from "./diagrams/shared/method.service";
import {ReferenceService} from "./diagrams/shared/reference.service";
import {GithubService} from "./diagrams/shared/github.service";

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        HomepageComponent,
        DiagramsComponent,
        CardComponent,
        NewComponent,
        ShowComponent,
        ClassDiagramComponent,
        ConnectorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [RepositoryService, ClassService, MethodService, ReferenceService, GithubService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
