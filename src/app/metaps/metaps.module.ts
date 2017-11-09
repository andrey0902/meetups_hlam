/**
 * Created by andrei on 05.11.2017.
 */
import { NgModule } from '@angular/core';

import { MetapsComponent } from './metaps.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize/dist';
import { MetapsRoutingModule } from './metaps-routing.module';
import { DataService } from './shared/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AllReportsComponent } from './all-report/all-report.component';
import { SearchComponent } from './search/search.component';
import { CreateMeetComponent } from './create-meet/create-meet.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { ModalTreggerComponent } from './shared/modal-tregger/modal-tregger.component';
import { TestComponent } from './test/test.component';
import { AllComponent } from './all/all.component';
import { MyMeetupsComponent } from '../my-meetups/my-meetups.component';
import { AllDataComponent } from './all-data/all-data.component';
import { CreateDataComponent } from '../create-data/create-data.component';
import { ToggleDirective } from './toggle.directive';
import 'materialize-css';
import { TabInitializeDirective } from './shared/tab-initialize.directive';
@NgModule({
 imports: [
   CommonModule,
   ReactiveFormsModule,
   MaterializeModule,
   MetapsRoutingModule,
   HttpClientModule,
 ],
 exports: [],
 declarations: [
   MetapsComponent,
   AllReportsComponent,
   SearchComponent,
   CreateMeetComponent,
   CreateSubjectComponent,
   CreateReportComponent,
   ModalTreggerComponent,
   TestComponent,
   AllComponent,
   MyMeetupsComponent,
   AllDataComponent,
   CreateDataComponent,
   ToggleDirective,
   TabInitializeDirective
 ],
 providers: [DataService],
  entryComponents: [CreateReportComponent]
})
export class MetapsModule { }
