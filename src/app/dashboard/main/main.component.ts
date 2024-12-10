import { Component,HostListener, OnInit  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DataSharedService } from '../../../service/data-shared.service';
import { Menu } from '../../../Model/menu';
import { Observable } from 'rxjs';
import { StorageService } from '../../../service/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit{
  isSmallScreen: boolean = false;
  menu?:Menu | undefined;
  conocenos = false;

  constructor(private _dataService: DataSharedService, private _service: StorageService,){}

  ngOnInit(): void {
    this._dataService.get().subscribe((estado: boolean) => {
      this.conocenos = estado; // Actualiza el estado local
      console.log('Estado recibido:', estado);
    });

    const menu = this._service.getStorage();

    if (!menu) {
      this.menu = new Menu();
      this.menu.main = true;


    } else {
      this.menu = menu;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  onSidenavOpen() {
    console.log('Sidebar abierto');
  }

  onSidenavClose() {
    console.log('Sidebar cerrado');
  }

  goConocemos(){
    if(this.menu === undefined){
      return;
    }

    this.menu.conocenos = true;
    this.menu.main = false;
    this._service.setMenu(this.menu);
    return this.conocenos = !this.conocenos ;
  }
}
