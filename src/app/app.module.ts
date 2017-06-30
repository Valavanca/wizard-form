import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

/* Material */
import { MaterialModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

/* App root*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Fields components*/
import { MoneyReturnComponent } from './money-return/money-return.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ConfirmComponent, PresentData } from './confirm/confirm.component';

/* App Router */
import { AppRoutingModule } from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { GetCityService }    from './data/get-city.service'
import { WorkflowService }    from './workflow/workflow.service'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoneyReturnComponent,
    PersonalInfoComponent,
    ConfirmComponent,
    PresentData
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService },
                    { provide: GetCityService, useClass: GetCityService },
                    { provide: WorkflowService, useClass: WorkflowService }],
  entryComponents: [PresentData],
  bootstrap: [AppComponent]
})
export class AppModule { }
