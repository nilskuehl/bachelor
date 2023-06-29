import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-sub-content',
  templateUrl: './sub-content.component.html',
  styleUrls: ['./sub-content.component.css']
})
export class SubContentComponent implements OnInit, OnDestroy {

  constructor(private data: DataService, private location: LocationService, private router: Router) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
    this.location.currentLocation = 'main';
    this.menuHome = { icon: "pi pi-home" }
    this.location.appendMenu(this.menuItem);
    this.menuItems = this.location.breadcrumbLocation;
  }

  ngOnDestroy(): void {
    this.location.removeMenu();
  }

  menuItem: MenuItem = { label: 'home', url: 'sub/A' }
  menuItems: MenuItem[];
  menuHome: MenuItem;
  size: string;


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

}
