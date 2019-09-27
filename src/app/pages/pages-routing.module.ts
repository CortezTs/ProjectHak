import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './_guards';

import {PagesComponent} from './pages.component';
import {LoginComponent} from './login/login.component';
import {RegComponent} from './reg/reg.component';
import {ProjectComponent} from './project/project.component';
import {HomeComponent} from "./home";
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'registration',
      component: RegComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'project',
      component: ProjectComponent
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
