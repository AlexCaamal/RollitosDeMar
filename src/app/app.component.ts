import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StorageService } from '../service/storage.service';
import { Menu } from '../Model/menu';
import { DataSharedService } from '../service/data-shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'rollitos-de-mar';
  conocenos = false;
  menuStorage: Menu | undefined;

  constructor(
    private _service: StorageService,
    private _dataService: DataSharedService
  ) {}

  ngOnInit(): void {
    const menu = this._service.getStorage();

    if (!menu) {
      this.menuStorage = new Menu();
      this.menuStorage.main = true;


    } else {
      this.menuStorage = menu;
      this._dataService.update(this.menuStorage.conocenos);
    }
  }

  goMain() {
    if(this.menuStorage === undefined){
      return;
    }

    this.menuStorage.main = true;
    this.menuStorage.conocenos = false;
    this._service.setMenu(this.menuStorage);
    this._dataService.update(false);
  }
}
