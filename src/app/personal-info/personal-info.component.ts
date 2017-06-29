import { Component, OnInit } from '@angular/core';
import {FormDataService} from '../data/formData.service'; 
import {GetCityService} from '../data/get-city.service'; 
import {Personal} from '../data/formData.model'; 

import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

/* rxJS*/
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


function has21years( errorType: string) {
  return function(input: FormControl) {
      /*console.log("INPUT:", input.value)*/
    if(input.value.length===10) { // validation only 10 numbers in ID
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

    /* City */
    filteredCity: any;
    states = [];

    /** Validators ID START**/
        firstName = new FormControl('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(16)
        ]);

        lastName = new FormControl('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(16)
        ]);
        
        idVl = new FormControl('', [
            Validators.required,
            has21years('21year'),
            has10numbers("10num")
        ]);
        
        cityCtrl = new FormControl('', [
            Validators.required
        ]); 

        personalForm: FormGroup = this.builder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            idVl: this.idVl,
            city: this.cityCtrl
        });
    /** validators end**/
    
    constructor(private formDataService: FormDataService, private getCity: GetCityService, private builder: FormBuilder) {
        this.filteredCity = this.cityCtrl.valueChanges
                                        .startWith(null)
                                        .map((name)=>{ 
                                            this.fetchData(name); 
                                            return name
                                        }).map((name) => { 
                                            return this.filterStates(name)
                                        });
    }

    ngOnInit() {
        this.person = this.formDataService.getPersonal();
        this.formDataService.setProgres(40);
        console.log('Personal feature loaded!');
    }

    private filterStates(val: string) {
        return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
                : this.states;
    }
    private fetchData(val: string) {
        if(!!val&&(val.length>=3)) {
            this.getCity.getCities(val).subscribe( res => {this.states=res});
            console.log("this.states", this.states);
        }
    }

    save(form: any) {
        if (form.valid)            
            this.formDataService.setPersonal(this.person);
    }

}