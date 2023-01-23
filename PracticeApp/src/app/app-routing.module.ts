import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildBindComponent } from './child-bind/child-bind.component';
import { ChildRoutingComponent } from './child-routing/child-routing.component';
import { DataTranferComponent } from './data-tranfer/data-tranfer.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { ObservablesComponent } from './observables/observables.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingMainComponent } from './routing-main/routing-main.component';


const routes: Routes = [

  {path: 'dir', component: DirectivesComponent},
  {path: 'pip', component: PipesComponent},
  {path: 'obs', component: ObservablesComponent},
  {path: 'dat', component: DataTranferComponent},
  {path: 'rou', component: RoutingMainComponent,children:[{path: 'child', component: ChildRoutingComponent,data :{ id:'1', name:"Angular"}}]},
  {path: 'for', component: FormsComponent},
  {path: 'par', component: ParentComponent},
  {path: 'chi', component: ChildBindComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
