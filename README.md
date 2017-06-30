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

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

___

#### Feel free to contact me or to make pull request

