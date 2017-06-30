# Wizard form

This is multi step form generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3 and [Angular Material](https://material.angular.io/)

## Project

- The primary instance of the data form is represented by "FormDataService", which has all the necessary methods.
- FormDataService checks the steps using "WorkflowService". The router uses `WorkflowService 'to validate paths.
- the input fields are checked by configured `FormControl` and` FormGroup`
- Each step component gets the type of personal data for its input fields with Data serviced.
- City field autocompleted by [geobytes.com](http://geobytes.com/)
- Data is stored when the "Next" button is pressed.
- Confirmation of the component shows the saved data using the "Send" and "Reset" buttons. Display show popup data. Reset - reset data.

## Demo
- [Heroku](https://fast-reef-61200.herokuapp.com/personal)
- [Github pages](https://valavanca.github.io/wizard-form/personal)
p.s Since geobytes.com has usesed http, it is necessary to download scripts manually to run the application. It only helps to Heroku

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

___

#### Feel free to contact me or to make pull request

