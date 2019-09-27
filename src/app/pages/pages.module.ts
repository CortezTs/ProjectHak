import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
// import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import {ProjectsModule} from './projects/pages.module'
import {ProjectModule} from './project/project.module'
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    ProjectsModule,
    ProjectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    RegComponent,
  ],
})
export class PagesModule {
}
