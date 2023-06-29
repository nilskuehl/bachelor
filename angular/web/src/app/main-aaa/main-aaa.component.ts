import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-main-aaa',
  templateUrl: './main-aaa.component.html',
  styleUrls: ['./main-aaa.component.css']
})
export class MainAAAComponent implements OnDestroy, OnInit {
  menuItems: MenuItem[];
  menuItem: MenuItem = { label: 'home', url: 'main/AAA', preserveFragment: true }
  menuHome: MenuItem;
  size: string;
  validated: boolean;
  isAdult: boolean;
  firstNameExists: boolean;
  lastNameExistst: boolean;
  userNameExistst: boolean;
  emailValid: boolean;

  foreground: string;
  background: string;

  readonly emailRegex: RegExp = /^.*@hft.de$/;


  constructor(private data: DataService, private location: LocationService, private router: Router) {
  }
  ngOnDestroy(): void {
    //this.location.removeMenu();
  }


  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
    this.location.currentLocation = 'main';
    this.menuHome = { icon: "pi pi-home" }
    this.location.removeMenu();
    this.location.appendMenu(this.menuItem);
    this.menuItems = this.location.breadcrumbLocation;
    this.data.currentForeground.subscribe(color => this.foreground = color);
    this.data.currenBackground.subscribe(color => this.background = color);
    this.data.changeLevel('AAA');

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

  getHeaderClass(): string {
    if (this.size == "size1") {
      return "headerClass-one"
    }
    if (this.size == "size15") {
      return "headerClass-half"
    }
    if (this.size == "size2") {
      return "headerClass-two"
    }
    return "headerClass-one";

  }
}
