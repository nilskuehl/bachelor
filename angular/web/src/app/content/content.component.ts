import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { MenuItem } from "primeng/api";
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  menuItems: MenuItem[];
  menuItem: MenuItem = { label: 'artikel', url: 'content/AAA', preserveFragment: true }
  size: string;
  foreground: string;
  background: string;
  constructor(private data: DataService, private location: LocationService, private router: Router) {
  }

  ngOnInit(): void {
    document.title = "Content"
    document.documentElement.lang = 'en'
    this.data.currentMessage.subscribe(message => this.size = message)
    this.location.currentLocation = 'content';
    this.location.currentBc.subscribe(bc => this.menuItems = bc);
    console.log(this.menuItems)

    this.data.currentForeground.subscribe(color => this.foreground = color);
    this.data.currenBackground.subscribe(color => this.background = color);
    this.data.changeLevel('A');
    document.title = "Subcontent Level A"
  }

}
