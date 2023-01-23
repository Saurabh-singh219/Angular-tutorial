import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { ObservablesComponent } from './observables/observables.component';
import { FormsModule } from '@angular/forms';
import { SortingPipe } from './sorting.pipe';
import { CustomIfDirective } from './custom-if.directive';
import { DataTranferComponent } from './data-tranfer/data-tranfer.component';
import { ChildComponent } from './data-tranfer/child/child.component';
import { OthersComponent } from './others/others.component';
import { ChildRoutingComponent } from './child-routing/child-routing.component';
import { RoutingMainComponent } from './routing-main/routing-main.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildBindComponent } from './child-bind/child-bind.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    DirectivesComponent,
    ObservablesComponent,
    SortingPipe,
    CustomIfDirective,
    DataTranferComponent,
    ChildComponent,
    OthersComponent,
    ChildRoutingComponent,
    RoutingMainComponent,
    FormsComponent,
    ParentComponent,
    ChildBindComponent,
    FormExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    MatToolbarModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
