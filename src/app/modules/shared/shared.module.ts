import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    CardComponent,
    NotFoundPageComponent
  ],
  exports: [
    CardComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
