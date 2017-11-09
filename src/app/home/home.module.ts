/**
 * Created by andrei on 22.08.2017.
 */
import {
  NgModule
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChildHomeComponent } from '../child-home/child-home.component';
import { ResolveService } from './resolve.service';
import { AuthGuardService } from '../cor/authguard.service';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    HomeComponent,
    ChildHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [],
  providers: [ResolveService,
    AuthGuardService]
})
export class HomeModule {
}
