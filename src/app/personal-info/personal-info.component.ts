import { Component, OnInit } from '@angular/core';
import {FormDataService} from '../data/formData.service'; 
import {Personal} from '../data/formData.model'; 

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
    title = 'Insert your personal info';
    person: Personal;
    form: any;
    
    constructor(private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.person = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }
 
    save(form: any) {
        if (form.valid) 
            this.formDataService.setPersonal(this.person);
    }
}