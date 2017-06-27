import { Component, OnInit } from '@angular/core';
import {FormDataService} from '../data/formData.service'; 
import {RequestMoney} from '../data/formData.model'; 

@Component({
  selector: 'app-money-return',
  templateUrl: './money-return.component.html',
  styleUrls: ['./money-return.component.css']
})
export class MoneyReturnComponent implements OnInit {
    title = 'How much do you want?';
    req: RequestMoney;
    form: any;

    errorRequestMoney() {
      if (this.req.requestMoney > 10000  ) {
        return 'Please enter a smaller amount';
      } else {
        return 'Invalid summa!';
      }
    }
    
    constructor(private formDataService: FormDataService) {
    }
 
    ngOnInit() {
        this.req = this.formDataService.getRequestMoney();
        console.log('Request money feature loaded!');
    }
 
    save(form: any) {
        if (form.valid) 
          this.formDataService.setRequestMoney(this.req);
    }
}
