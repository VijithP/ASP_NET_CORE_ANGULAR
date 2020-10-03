import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [OwnerListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent }
    ])
  ]
})
export class OwnerModule { }
