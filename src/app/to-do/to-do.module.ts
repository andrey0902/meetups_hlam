import { NgModule } from '@angular/core';

import { ToDoComponent } from './to-do.component';
import { CommonModule } from '@angular/common';
import { ToDoRouterModule } from './to-do.routing.module';
import { DataService } from './to-do.cervice';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterializeModule } from 'ng2-materialize';
import { FormComponent } from './dinamic/app.component';
import { DynamicFormComponent } from './dinamic/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dinamic/dynamic-form-question.component';
import { QuestionService } from './dinamic/question.service';
import { QuestionControlService } from './dinamic/question-control.service';
import { InputComponent } from './input/input.component';

@NgModule({
 imports: [
   CommonModule,
   ToDoRouterModule,
   FormsModule,
   SharedModule,
   MaterializeModule,
   ReactiveFormsModule
 ],
 exports: [],
 declarations: [
   ToDoComponent,
   ToDoFormComponent,
   ToDoListComponent,
   ToDoItemComponent,
   FormComponent,
   DynamicFormComponent,
   DynamicFormQuestionComponent,
   InputComponent,
 ],
 providers: [
   DataService,
   QuestionService,
   QuestionControlService,
 ],
})
export class ToDoModule { }
