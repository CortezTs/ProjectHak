import { NgModule } from '@angular/core';
import {
   NbCardModule,
   NbButtonModule,
 } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { ProjectsComponent } from './projects.component'

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
  ],
  declarations: [
    ProjectsComponent,
  ],
})
export class ProjectsModule { }
