import { Component, OnDestroy, HostListener, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from '../service/data.service';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content-aaa',
  templateUrl: './content-aaa.component.html',
  styleUrls: ['./content-aaa.component.css']
})

export class ContentAAAComponent implements OnInit {
  menuItems: MenuItem[];
  menuItem: MenuItem = { label: 'Article', url: 'content/AAA', preserveFragment: true }
  size: string;
  foreground: string;
  background: string;
  animated: boolean;
  constructor(private data: DataService, private location: LocationService, private router: Router) {
  }

  @HostListener('window:popstate')
  onPopState() {
    console.log('User clicked back button');
    document.body.style.backgroundColor = 'white';
  }

  ngOnInit(): void {
    document.title = "Content"
    document.documentElement.lang = 'en'
    this.data.currentMessage.subscribe(message => this.size = message)
    this.location.currentLocation = 'content';
    this.location.currentBc.subscribe(bc => this.menuItems = bc);
    console.log(this.menuItems)
    var boold = this.menuItems.find(item => item.url === this.menuItem.url) !== undefined
    if (!boold) {
      this.menuItems.push(this.menuItem)
      this.location.updateBc(this.menuItems)
    }
    this.data.currentForeground.subscribe(color => this.foreground = color);
    this.data.currenBackground.subscribe(color => this.background = color);
    this.data.currentAnimation.subscribe(a => this.animated = a)
    this.data.changeLevel('AAA');
    document.title = "Subcontent Level AAA"
    window.onpopstate = () => {
      console.log('User clicked back button');
      document.body.style.backgroundColor = 'white';
    };
  }



}
