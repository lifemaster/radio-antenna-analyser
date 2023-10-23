import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardInfoListComponent } from './components/card-info-list/card-info-list.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    CardComponent,
    CardInfoComponent,
    CardInfoListComponent,
    NotFoundPageComponent
  ],
  exports: [
    CardComponent,
    CardInfoComponent,
    CardInfoListComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
