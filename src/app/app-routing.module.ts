import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataImportExportComponent } from './data-import-export/data-import-export.component';
import { NewGridDemoComponent } from './new-grid-demo/new-grid-demo.component';
import { ExpandGridDemoComponent } from './expand-grid-demo/expand-grid-demo.component';
import { AppAuthPageComponent } from './app-auth-page/app-auth-page.component';
import { SpaceDashboardComponent } from './space-dashboard/space-dashboard.component';

const routes: Routes = [
  {path:'', redirectTo : 'AppAuthPage', pathMatch:'full' },
  { path: 'DataImportExport', component: DataImportExportComponent },
  { path: 'GridDemo', component: NewGridDemoComponent },
  { path: 'ExpandGridDemo', component: ExpandGridDemoComponent },
  { path: 'AppAuthPage', component: AppAuthPageComponent },
  { path: 'Space-Dashboard', component: SpaceDashboardComponent },
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
