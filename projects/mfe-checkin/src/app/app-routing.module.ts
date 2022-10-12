import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './checkin/ticket/ticket.component';

const routes: Routes = [
  {
    path: 'checkin',
    loadChildren: () => import('./checkin/checkin.module')
      .then(esm => esm.CheckinModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
