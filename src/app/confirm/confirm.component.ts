import { Component, OnInit, Input, Inject } from '@angular/core';
import {FormDataService} from '../data/formData.service'; 
import { FormData }  from '../data/formData.model';

import {MdDialog} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent  implements OnInit {
    title = 'Thanks for staying tuned!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    
    constructor(private formDataService: FormDataService, public dialog: MdDialog) {

    }

    openDialog() {
        this.formDataService.setProgres(100);
        this.dialog.open(PresentData, {
            data:  this.formData
        });
    }
    
    ngOnInit() { 
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        this.formDataService.setProgres(70);
        console.log('Result feature loaded!');
    }
    submit() {
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }  
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog.component.html'
})
export class PresentData {
    constructor(@Inject(MD_DIALOG_DATA) public data: any) { }
}

