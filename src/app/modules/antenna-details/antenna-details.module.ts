import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntennaDetailsRoutingModule } from './antenna-details.routing.module';

import { AntennaDetailsComponent } from './antenna-details.component';

@NgModule({
  declarations: [
    AntennaDetailsComponent
  ],
  imports: [
    AntennaDetailsRoutingModule,
    CommonModule
  ]
})
export class AntennaDetailsModule { }
