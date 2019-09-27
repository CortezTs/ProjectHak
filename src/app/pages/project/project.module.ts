import { NgModule } from '@angular/core';
import {
   NbCardModule,
   NbButtonModule,
 } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { ProjectComponent } from './project.component'

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
  ],
  declarations: [
    ProjectComponent,
  ],
})
export class ProjectModule { }
