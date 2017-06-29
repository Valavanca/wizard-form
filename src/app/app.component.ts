import { Component, OnInit, Input }   from '@angular/core';

import { FormDataService }   from './data/formData.service';

@Component({
  selector: 'form-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Multi-Step Wizard';
    @Input() formData;
    defaultData: boolean = false;

    constructor(private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.formData = this.formDataService.getDefaultData();
        console.log(this.title + ' loaded!');
    }

    reloadData() {
        this.formData = this.defaultData ? this.formDataService.getDefaultData() 
                                : this.formDataService.resetFormData();
        this.defaultData = !this.defaultData;
    }
}