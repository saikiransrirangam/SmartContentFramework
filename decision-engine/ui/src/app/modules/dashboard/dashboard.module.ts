import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgFlowchartModule } from 'src/app/shared/components/flowchart';
import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PageHeaderComponent } from './components/common/page-header/page-header.component';
import {
    SurveysTableItemComponent
} from './components/surveys/surveys-table-item/surveys-table-item.component';
import { SurveysTableComponent } from './components/surveys/surveys-table/surveys-table.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SurveysComponent } from './pages/surveys/surveys.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SurveysComponent,
    PageHeaderComponent,
    SurveysTableComponent,
    SurveysTableItemComponent,
  ],
  imports: [
    NgFlowchartModule,
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class DashboardModule {}
