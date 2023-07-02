import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  currentLocation: string;
  breadcrumbLocation: MenuItem[] = [];
  isRegister: boolean = false;
  private bcSource = new BehaviorSubject<MenuItem[]>([{ label: 'home', url: 'main/AAA', preserveFragment: true }]);
  currentBc = this.bcSource.asObservable();

  constructor(private router: Router) { }

  updateBc(menuItem: MenuItem[]) {
    this.bcSource.next(menuItem)
  }

  appendMenu(menuItem: MenuItem) {
    this.breadcrumbLocation.push(menuItem);
    return;
  }

  removeMenu() {
    this.breadcrumbLocation.pop();
    return;
  }

}
