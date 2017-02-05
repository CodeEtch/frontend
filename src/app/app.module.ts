import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {TopbarComponent} from "./shared/topbar/topbar.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomepageComponent} from "./homepage/homepage.component";
import { DiagramsComponent } from './diagrams/diagrams.component';
import { CardComponent } from './shared/card/card.component';
import { NewComponent } from './diagrams/new/new.component';
import { ShowComponent } from './diagrams/show/show.component';
import { ClassDiagramComponent } from './diagrams/shared/class-diagram/class-diagram.component';
import { ConnectorComponent } from './diagrams/shared/connector/connector.component';

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
