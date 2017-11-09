/**
 * Created by andrei on 26.10.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToDoComponent } from './to-do.component';

@NgModule({
 imports: [RouterModule.forChild([
   {
     path: 'to-do',
     component: ToDoComponent
   }
 ])],
 exports: [RouterModule],
 declarations: [],
 providers: [],
})
export class ToDoRouterModule {}
