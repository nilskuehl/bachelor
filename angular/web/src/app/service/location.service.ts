import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  currentLocation: string;
  breadcrumbLocation: MenuItem[] = [];
  isRegister: boolean = false;
  private bcSource = new BehaviorSubject<MenuItem[]>([{ label: 'content', url: 'main/AAA', preserveFragment: true }]);
  currentBc = this.bcSource.asObservable();

  constructor() { }

  updateBc(menuItem: MenuItem[]) {
    this.bcSource.next(menuItem)
  }

  appendMenu(menuItem: MenuItem) {
    this.breadcrumbLocation.push(menuItem);
    console.log(this.breadcrumbLocation)
    return;
  }

  removeMenu() {
    this.breadcrumbLocation.pop();
    return;
  }

}
