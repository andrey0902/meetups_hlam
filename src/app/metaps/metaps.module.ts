/**
 * Created by andrei on 05.11.2017.
 */
import { NgModule } from '@angular/core';

import { MetapsComponent } from './metaps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AuthocompleteComponent } from './autocomplete/autocomplete.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { AuthocompleteService } from './autocomplete/authocomplete.service';
import { AuthguardService } from './shared/service/authguard.service';
import { ResolveService } from '../home/resolve.service';
import { CreateMeetupsModalComponent } from './create-meetups-modal/create-meetups-modal.component';
import { CustomDataService } from './create-meetups-modal/custom.data';
import { AuthocompleteService2 } from './create-meetups-modal/autho-complete.service';
@NgModule({
 imports: [
   CommonModule,
   FormsModule,
   Ng2CompleterModule,
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
   TabInitializeDirective,
   AuthocompleteComponent,
   CreateMeetupsModalComponent
 ],
 providers: [DataService,
   AuthocompleteService,
   AuthguardService,
   ResolveService,
   CustomDataService,
   AuthocompleteService2
 ],
  entryComponents: [CreateReportComponent,
    CreateMeetupsModalComponent]
})
export class MetapsModule { }
