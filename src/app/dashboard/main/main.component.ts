import { Component,HostListener, OnInit  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {
  isSmallScreen: boolean = false;

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


  onButtonClick(): void {
    console.log("Botón flotante presionado");
    // Aquí puedes agregar la lógica que desees, como redirigir a otra página o mostrar un mensaje.
  }

}
