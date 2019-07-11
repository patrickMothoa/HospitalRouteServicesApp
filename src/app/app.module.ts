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
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { PatientComponent } from './patient/patient.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PatientdetailsComponent,
    PatientComponent,
    PatientAppointmentComponent,
    ScheduleComponent,
    DoctorsComponent,
    DoctorAppointmentComponent
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
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatSortModule,
    RouterModule.forRoot([
      {path: '', component: AdminComponent},
      {path: 'patientdetails/:id', component: PatientdetailsComponent},
      {path: '', component:PatientComponent},
      {path: 'patientAppointment/:id', component:PatientAppointmentComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
