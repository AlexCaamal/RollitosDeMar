import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { mainDashboradRoutes } from './mainDashborad.routes';
import { MaterialModule } from '../../../utils/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainComponent } from './main.component';
import { ConocenosComponent } from '../conocenos/conocenos.component';

@NgModule({
  declarations: [MainComponent, ConocenosComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MaterialModule,
    RouterModule.forChild(mainDashboradRoutes)
  ]
})
export class mainDashboradhModule { }
