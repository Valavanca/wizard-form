import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/* Material */
import { MaterialModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

/* App root*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Fields components*/
import { MoneyReturnComponent } from './money-return/money-return.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ConfirmComponent } from './confirm/confirm.component';

/* App Router */
import { AppRoutingModule } from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service'
import { WorkflowService }    from './workflow/workflow.service';

/* Directive*/
import { IdValidatorDirective }    from './personal-info/id-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoneyReturnComponent,
    PersonalInfoComponent,
    IdValidatorDirective,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService },
                    { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
