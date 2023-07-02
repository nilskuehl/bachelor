import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { DataService } from '../service/data.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-content-aa',
  templateUrl: './content-aa.component.html',
  styleUrls: ['./content-aa.component.css']
})
export class ContentAAComponent implements OnInit {


  constructor(private data: DataService, private location: LocationService) { }

  menuItems: MenuItem[] = [{ label: 'About', url: 'about/AAA', preserveFragment: true }];
  menuItem: MenuItem = { label: 'About', url: 'about', preserveFragment: true }

  size = 'size1'
  foreground: string;
  background: string;

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
    this.data.currentForeground.subscribe(color => this.foreground = color);
    this.data.currenBackground.subscribe(color => this.background = color);
    document.title = "Content Level AA"
    this.location.currentLocation = 'content';
    document.documentElement.lang = 'en'
    this.data.changeLevel('AA');

    this.location.currentBc.subscribe(bc => this.menuItems = bc);


  }

}
