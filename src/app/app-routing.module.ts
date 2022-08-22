import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventsComponent } from './components/events/events.component';
import { ExampleApplicationHttpComponent } from './components/example-application-http/example-application-http.component';
import { ExampleApplicationInterfacesComponent } from './components/example-application-interfaces/example-application-interfaces.component';
import { ExampleApplicationServicesComponent } from './components/example-application-services/example-application-services.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipeOperatorsComponent } from './components/pipe-operators/pipe-operators.component';
import { TwoWayDataBidingComponent } from './components/two-way-data-biding/two-way-data-biding.component';

//ROTAS CRIADAS PARA CADA COMPONENTE 🔽
const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'events', component: EventsComponent},
  {path: 'list-render', component: ListRenderComponent},
  {path: 'example-application-interfaces', component: ExampleApplicationInterfacesComponent},
  {path: 'pipe-operators', component: PipeOperatorsComponent},
  {path: 'two-way-data-biding', component: TwoWayDataBidingComponent},
  {path: 'example-application-services', component: ExampleApplicationServicesComponent},
  {path: 'example-application-http', component: ExampleApplicationHttpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
