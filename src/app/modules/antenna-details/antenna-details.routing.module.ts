import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntennaDetailsComponent } from './antenna-details.component';

const routes: Routes = [
  {
    path: '',
    component: AntennaDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntennaDetailsRoutingModule { }
