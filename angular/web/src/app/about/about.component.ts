import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { MenuItem } from "primeng/api";
import { LocationService } from '../service/location.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


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
    document.title = "About this Website"
    document.documentElement.lang = 'en'
    this.data.changeLevel('AAA');
    this.location.currentBc.subscribe(bc => this.menuItems = bc);

    var boold = this.menuItems.find(item => item.url === this.menuItem.url) !== undefined
    if (!boold) {
      this.menuItems.push(this.menuItem)
      this.location.updateBc(this.menuItems)
    }

  }


}
