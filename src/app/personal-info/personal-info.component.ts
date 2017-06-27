import { Component, OnInit } from '@angular/core';
import {FormDataService} from '../data/formData.service'; 
import {Personal} from '../data/formData.model'; 

import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

function has21years( errorType: string) {
  return function(input: FormControl) {
      console.log("INPUT:", input.value)
    if(input.value>999999999) { // validation only 10 numbers in ID
        let days = Number((input.value).toString().substring(0, 5));
        let birthday = new Date(1990, 0, days) 
        let yearsOld = new Date().getFullYear() - birthday.getFullYear();
        console.log("Years:", yearsOld);
        return yearsOld >= 21 ?  null :  { [errorType]: true };
    } else {
        return null
    }
  };
}

function has10numbers( errorType: string) {
  return function(input: FormControl) {
    let length = (input.value || 0).toString().length;
    if(length!==10) { // need 10 numbers in ID
        return  { [errorType]: true };
    } 
  };
}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
    title = 'Insert your personal info';
    person: Personal;
    form: any;

    /****/
        firstName = new FormControl('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(32)
        ]);

        lastName = new FormControl('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(32)
        ]);
        
        idVl = new FormControl('', [
            Validators.required,
            has21years('21year'),
            has10numbers("10num")
        ]);
        
        city = new FormControl('', [
            Validators.required
        ]);

        personalForm: FormGroup = this.builder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            idVl: this.idVl,
            city: this.city
        });
    /****/
    
    constructor(private formDataService: FormDataService, private builder: FormBuilder) {
    }
 
   /* login () {
        console.log(this.loginForm.value);
        // Attempt Logging in...
    }*/
    /*******/

    ngOnInit() {
        this.person = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }
 
    save(form: any) {
        if (form.valid) 
            this.formDataService.setPersonal(this.person);
            console.log
    }

}