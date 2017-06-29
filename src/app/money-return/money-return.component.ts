import { Component, OnInit } from '@angular/core';
import {FormDataService} from '../data/formData.service'; 
import {RequestMoney} from '../data/formData.model'; 

import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';


function maxMoney( errorType: string) {
  return function(input: FormControl) {
    let valid:boolean = !!input && (input.value<=10000) && (input.value>=1) && !(input.value%1);
    return valid ? null  : { [errorType]: true };
  };
}

function max12( errorType: string) {
  return function(input: FormControl) {
    let valid:boolean = !!input && (input.value<=12) && (input.value>=1) && !(input.value%1);
    return valid ? null  : { [errorType]: true };
  };
}

@Component({
  selector: 'app-money-return',
  templateUrl: './money-return.component.html',
  styleUrls: ['./money-return.component.css']
})
export class MoneyReturnComponent implements OnInit {
    title = 'Input fields for money request ';
    req: RequestMoney;
    form: any;

    /** Validators **/
    summa= new FormControl('', [
        Validators.required,
        maxMoney('max10k')
    ]);
    period = new FormControl('', [
        Validators.required,
        max12("max12")
    ]);
    moneyForm: FormGroup = this.builder.group({
        summa: this.summa,
        period: this.period
    });
    /** validators end**/
    
    constructor(private formDataService: FormDataService, private builder: FormBuilder) {
    }
 
    ngOnInit() {
        this.req = this.formDataService.getRequestMoney();
        console.log('Request money feature loaded!');
        this.formDataService.setProgres(0);
    }
 
    save(form: any) {
        if (form.valid) 
          this.formDataService.setRequestMoney(this.req);
    }
}
