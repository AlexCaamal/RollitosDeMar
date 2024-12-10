import { Injectable } from '@angular/core';
import { Menu } from '../Model/menu';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setMenu(menu: Menu) {
    const menuJson = JSON.stringify(menu);
    localStorage.setItem('menuJson', menuJson);
  }

  getStorage(): Menu {
    const storage = localStorage.getItem('menuJson');

    if (storage) {
      const user = JSON.parse(storage);

       return user;
    } else {
      return new Menu();
    }
  }
}
