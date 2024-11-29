import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const dashboardRoutesNames = {
  consultar: '',
};

const routes: Routes = [
  {
    path: '',
    children: [
        {path: dashboardRoutesNames.consultar,
          loadChildren: () => import('./main/mainDashborad.module').then(m => m.mainDashboradhModule)},
        { path: '**', redirectTo: dashboardRoutesNames.consultar}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {}
