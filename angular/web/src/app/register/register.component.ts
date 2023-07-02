import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', "../../../src/styles.css"]
})
export class RegisterComponent implements OnInit {
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
  size: string;

  readonly emailRegex: RegExp = /^.*@hft.de$/;

  constructor(private location: LocationService, private data: DataService, private router: Router) {
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.email = '';
    this.validated = false;
  }
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message);
    this.location.currentLocation = 'register';
    document.title = "Register Level A"
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


  handleClick(link: string) {
    this.redirectToAnotherPage(link);
  }

  handleKeyDown(event: KeyboardEvent, link: string) {
    if (event.key === 'Enter') {
      this.redirectToAnotherPage(link);
    }
  }

  redirectToAnotherPage(link: string) {
    this.router.navigate(['/' + link]);
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