/**
 * Created by andrei on 22.08.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ChildHomeComponent } from '../child-home/child-home.component';
import { AuthGuardService } from '../cor/authguard.service';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'child',
          component: ChildHomeComponent,
          canActivate: [AuthGuardService]
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
