import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[];
  menuItem: MenuItem = { label: 'home', url: 'main/A', preserveFragment: true }
  menuHome: MenuItem;
  size: string;


  constructor(private data: DataService, private location: LocationService, private router: Router) {
  }
  ngOnDestroy(): void {
    this.location.removeMenu();
  }


  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
    this.location.currentLocation = 'main';
    this.menuHome = { icon: "pi pi-home" }
    this.location.appendMenu(this.menuItem);
    this.menuItems = this.location.breadcrumbLocation;
    this.data.changeLevel('A');

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
