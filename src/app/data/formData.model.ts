export class FormData {
    firstName: string = '';
    lastName : string = '';
    id : string = "";
    city: string = '';
    requestMoney: number;
    period: number;

    clear() {
        this.firstName = '';
        this.lastName = '';
        this.id = "";
        this.city = '';
        this.requestMoney = null;
        this.period = null;
    }
}

export class Personal {
    firstName: string = '';
    lastName : string = '';
    id : string = "";
    city: string = '';
}

export class RequestMoney {
    requestMoney: number;
    period: number;
}
