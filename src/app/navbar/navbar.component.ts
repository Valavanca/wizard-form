import { Component, OnInit } from '@angular/core';
import {FormDataService} from '../data/formData.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  progres:number;
  formService:FormDataService;
  subscription; //?
 
  constructor(fs: FormDataService) {
    this.progres = 0;
    this.formService = fs;
  }

  ngOnInit() {
        this.subscription = this.formService.getEmittedValue()
      .subscribe(value => this.progres=value);
  }

}
