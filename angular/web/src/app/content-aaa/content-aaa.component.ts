import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from '../service/data.service';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content-aaa',
  templateUrl: './content-aaa.component.html',
  styleUrls: ['./content-aaa.component.css']
})

export class ContentAAAComponent implements OnDestroy, OnInit {
  menuItems: MenuItem[];
  menuItem: MenuItem = { label: 'content', url: 'main/A', preserveFragment: true }
  size: string;
  foreground: string;
  background: string;
  constructor(private data: DataService, private location: LocationService, private router: Router) {
  }

  ngOnDestroy(): void {
    //this.location.removeMenu();
  }


  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
    this.location.currentLocation = 'main';
    this.location.appendMenu(this.menuItem);
    this.menuItems = this.location.breadcrumbLocation;
    this.data.currentForeground.subscribe(color => this.foreground = color);
    this.data.currenBackground.subscribe(color => this.background = color);
    this.data.changeLevel('AAA');

  }

}
