import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentComponent } from './components/parent/parent.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ExampleApplicationInterfacesComponent } from './components/example-application-interfaces/example-application-interfaces.component';
import { PipeOperatorsComponent } from './components/pipe-operators/pipe-operators.component';
import { TwoWayDataBidingComponent } from './components/two-way-data-biding/two-way-data-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    ListRenderComponent,
    ExampleApplicationInterfacesComponent,
    PipeOperatorsComponent,
    TwoWayDataBidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
