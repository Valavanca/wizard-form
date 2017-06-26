import { Injectable }                        from '@angular/core';

import { FormData, Personal, RequestMoney }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isRequestMoneyValid: boolean = false;
    private isPersonalFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            city: this.formData.city,
            id: this.formData.id
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.id = data.id;
        this.formData.city = data.city;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);         // workflow
    }


    getRequestMoney() : RequestMoney {
        // Return the Request data
        var req: RequestMoney = {
            requestMoney: this.formData.requestMoney,
            period: this.formData.period,
        };
        return req;
    }

    setRequestMoney(data: RequestMoney) {
        // Update the requst data only when the Request Form had been validated successfully
        this.isRequestMoneyValid = true;
        this.formData.requestMoney = data.requestMoney;
        this.formData.period = data.period;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.requestMoney);   // workflow  
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
         this.workflowService.resetSteps();      //  workflow

        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isRequestMoneyValid = this.isRequestMoneyValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isRequestMoneyValid &&
                this.isRequestMoneyValid;
    }
}