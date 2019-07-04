import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Services/admin/admin.component';
import { PatientdetailsComponent } from './Services/patientdetails/patientdetails.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule,MatFormFieldModule,MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router'
import {MatSortModule} from '@angular/material/sort';
import { PatientComponent } from './patient/patient.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PatientdetailsComponent,
    PatientComponent,
    PatientAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatSortModule,
    RouterModule.forRoot([
      {path: '', component: AdminComponent},
      {path: 'patientdetails/:id', component: PatientdetailsComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
