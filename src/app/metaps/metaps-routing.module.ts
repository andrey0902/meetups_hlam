/**
 * Created by andrei on 05.11.2017.
 */
import { NgModule } from '@angular/core';

import { MetapsComponent } from './metaps.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AllComponent } from './all/all.component';
import { MyMeetupsComponent } from '../my-meetups/my-meetups.component';
import { AllDataComponent } from './all-data/all-data.component';
import { CreateDataComponent } from '../create-data/create-data.component';
import { AuthguardService } from './shared/service/authguard.service';

@NgModule({
 imports: [RouterModule.forChild([
   {
     path: 'metaps',
     component: MetapsComponent,
     children: [
       {
         path: '',
         redirectTo: '/metaps/all',
         pathMatch: 'full'
       },
       {
         path: 'all',
         component: AllComponent
       },
       {
         path: 'myMeetups',
         component: MyMeetupsComponent,
         canActivate: [AuthguardService]
       },
       {
         path: 'allData',
         component: AllDataComponent
       },
       {
         path: 'createData',
         component: CreateDataComponent
       }
     ]
   },
   {
     path: 'test/:id',
     component: TestComponent,
     pathMatch: 'full'
   }
 ])],
 exports: [RouterModule],
 declarations: [],
 providers: [],
})
export class MetapsRoutingModule { }
