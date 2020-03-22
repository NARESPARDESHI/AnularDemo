import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule } from '@angular/material';
import { DataImportExportComponent } from './data-import-export/data-import-export.component';
import {MatRadioModule} from '@angular/material/radio';
import {TableModule} from 'primeng/table';
import { NewGridDemoComponent } from './new-grid-demo/new-grid-demo.component';
import { CarService } from 'src/app/Service/carservice';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MessageService} from 'primeng/api';
import { ExpandGridDemoComponent } from './expand-grid-demo/expand-grid-demo.component';
import { AppAuthPageComponent } from './app-auth-page/app-auth-page.component';
import { SpaceDashboardComponent } from './space-dashboard/space-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DataImportExportComponent,
    NewGridDemoComponent,
    ExpandGridDemoComponent,
    AppAuthPageComponent,
    SpaceDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatCardModule,
    MatRadioModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    ButtonModule
  ],
  providers: [CarService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
