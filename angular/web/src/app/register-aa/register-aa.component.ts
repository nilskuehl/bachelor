import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-aa',
  templateUrl: './register-aa.component.html',
  styleUrls: ['./register-aa.component.css', "../../../src/styles.css"]
})
export class RegisterAAComponent implements OnInit {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  birthday: Date;
  validated: boolean;
  isAdult: boolean;
  firstNameExists: boolean;
  lastNameExistst: boolean;
  userNameExistst: boolean;
  emailValid: boolean;
  up: boolean;
  readonly emailRegex: RegExp = /^.*@hft.de$/;

  size: string;

  constructor(private data: DataService, private location: LocationService, private router: Router) {
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.email = '';
    this.validated = false;
    this.up = true;
  }
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message);
    this.location.currentLocation = 'register';
    document.title = "Register Level AA"
    document.documentElement.lang = 'en'
    this.data.changeLevel('AA');


  }

  validate(): boolean {
    if (this.firstNameExists && this.lastNameExistst &&
      this.emailValid && this.isAdult) {
      this.validated = true;
      return true;
    }
    return false;
  }

  checkEmailValid(mail: string): void {
    this.emailValid = this.emailRegex.test(mail);
    this.validate();
  }

  checkName(): void {
    if (this.firstName != '') {
      this.firstNameExists = true;
      console.log("first name exists: " + this.firstNameExists)
    } else {
      this.firstNameExists = false;
    }
    if (this.lastName != '') {
      this.lastNameExistst = true;
      console.log("lastname exists: " + this.lastNameExistst)
    } else {
      this.lastNameExistst = false;
    }
    if (this.username != '') {
      this.userNameExistst = true;
      console.log("lastname exists: " + this.userNameExistst)
    } else {
      this.userNameExistst = false;
    }
    this.validate()
  }

  checkAge(birth: Date): void {
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    console.log("age: " + age)
    if (age >= 18) {
      this.isAdult = true;
    } else
      this.isAdult = false;
    this.validate()
  }

  onSubmit(url: string) {
    this.router.navigate([url])
  }
}
