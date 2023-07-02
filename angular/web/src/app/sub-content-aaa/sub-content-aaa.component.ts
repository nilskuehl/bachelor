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
  menuItem: MenuItem = { label: 'content', url: document.location.pathname, preserveFragment: true }
  size: string;
  foreground: string;
  background: string;
  constructor(private data: DataService, private location: LocationService, private router: Router) {
  }

  ngOnDestroy(): void {
    this.location.removeMenu();
  }

  previousPath: string;
  getPreviousPath(): string {
    const referrerUrl: URL = new URL(document.referrer);
    return referrerUrl.pathname;
  }


  ngOnInit(): void {
    this.previousPath = this.getPreviousPath();
    console.log(this.previousPath)
    this.data.currentMessage.subscribe(message => this.size = message)
    this.location.currentLocation = 'sub';
    this.location.currentBc.subscribe(bc => this.menuItems = bc);
    var boold = this.menuItems.find(item => item.url === "content/AAA") !== undefined
    if (boold) {
      this.menuItems.pop()
      this.location.updateBc(this.menuItems)
    }
    var boold = this.menuItems.find(item => item.url === this.menuItem.url) !== undefined
    if (!boold) {
      this.menuItems.push(this.menuItem)
      this.location.updateBc(this.menuItems)
    }

    this.data.currentForeground.subscribe(color => this.foreground = color);
    this.data.currenBackground.subscribe(color => this.background = color);
    this.data.changeLevel('AAA');
    document.title = "Subcontent Level AAA"



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
