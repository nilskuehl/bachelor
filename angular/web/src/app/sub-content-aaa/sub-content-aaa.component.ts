import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-sub-content-aaa',
  templateUrl: './sub-content-aaa.component.html',
  styleUrls: ['./sub-content-aaa.component.css']
})
export class SubContentAAAComponent {

  menuItems: MenuItem[];
  menuItem: MenuItem = { label: 'content', url: 'sub/AAA', preserveFragment: true }
  size: string;
  foreground: string;
  background: string;
  constructor(private data: DataService, private location: LocationService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.location.removeMenu();
  }


  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
    this.location.currentLocation = 'main';
    this.location.currentBc.subscribe(bc => this.menuItems = bc);
    if (this.menuItems[this.menuItems.length - 1].url != this.menuItem.url) {
      console.log(this.menuItems)
      this.menuItems.push(this.menuItem)
      this.location.updateBc(this.menuItems)
    }
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
}
