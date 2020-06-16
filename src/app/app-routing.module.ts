import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from '@layouts/admin/admin.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@layouts/client/client.module').then(mod => mod.ClientModule)
  },

  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('@layouts/admin/admin.module').then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [  RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
