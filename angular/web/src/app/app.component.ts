import { Component, OnInit, ChangeDetectorRef, NgZone, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DataService } from './service/data.service';
import { LocationService } from './service/location.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit, AfterViewInit {


  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.size = message)
    this.data.currentLevel.subscribe(level => this.level = level)
    this.data.currentForeground.subscribe(color => this.foreground = color);
    this.data.currenBackground.subscribe(color => this.background = color);
    this.location.currentBc.subscribe(bc => {
      this.menuItems = bc;
    })
    this.data.currentAnimation.subscribe(an => this.animation = an)
  }


  constructor(private data: DataService, private location: LocationService, private changeDetectorRef: ChangeDetectorRef, private router: Router) {
  }

  ngAfterViewInit(): void {
    this.location.currentBc.subscribe(bc => {
      this.menuItems = bc;
    })
  }

  title = 'Accessibility possibility of implementation';
  menuItems: MenuItem[];

  isExpanded: boolean = false;
  isSize: boolean = false;
  size: string = "size2";
  foreground: string = "#000000";
  background: string = "#ffffff";
  level: string;

  animation: boolean = true;

  path: string = '';
  isRegister = this.location.isRegister;

  size1: boolean = true;
  size150: boolean = false;
  size200: boolean = false;


  items: MenuItem[] = [
    { label: 'Level A', tabindex: "1", target: "_self" },
    { label: 'Level AA', tabindex: "1", target: "_self" },
    { label: 'Level AAA', tabindex: "1", target: "_self" },
    { separator: true },
    { label: 'Font size up', command: () => this.upSize(), tabindex: "1" },
    { label: 'Font size down', command: () => this.downSize(), tabindex: "1" },
    { separator: true },
    { label: 'Start/Stop Animations', command: () => this.anim(), tabindex: "1" },
  ]


  anim(): void {
    this.data.changeAnimation(!this.animation);
  }

  getCurrentLocation(): void {
    this.items[0].command = () => this.router.navigate([this.location.currentLocation + '/A']);
    this.items[1].command = () => this.router.navigate([this.location.currentLocation + '/AA']);
    this.items[2].command = () => this.router.navigate([this.location.currentLocation + '/AAA']);
  }

  changeForeground(): void {
    this.data.changeForegorund(this.foreground);
  }

  changeBackground(): void {
    this.data.changeBackgorund(this.background);
  }

  upSize() {
    if (this.size == "size1") {
      this.data.changeMessage("size15");
      return
    }
    if (this.size == "size15") {
      this.data.changeMessage("size2");
      return
    }
    if (this.size == "size2") {
      this.data.changeMessage("size2");
      return
    }
  }

  downSize() {
    if (this.size == "size1") {
      this.data.changeMessage("size1");
      return
    }
    if (this.size == "size15") {
      this.data.changeMessage("size1");
      return
    }
    if (this.size == "size2") {
      this.data.changeMessage("size15");
      return
    }
  }

  expandLinks() {
    this.isExpanded = true;
  }

  collapseLinks() {
    this.isExpanded = false;
  }

  toggleLinks() {
    this.isExpanded = !this.isExpanded;
  }

  expandSize() {
    this.isSize = true;
  }

  collapseSize() {
    this.isSize = false;
  }

  toggleSize() {
    this.isSize = !this.isSize;
  }



}
