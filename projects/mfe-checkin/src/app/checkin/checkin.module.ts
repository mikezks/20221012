import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TicketComponent
      }
    ])
  ]
})
export class CheckinModule { }
