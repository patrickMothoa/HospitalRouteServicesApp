import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Services/admin/admin.component';
import { PatientdetailsComponent } from './Services/patientdetails/patientdetails.component';
import { PatientComponent } from './patient/patient.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { DoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [{ path: 'admin', component: AdminComponent},
{path: 'patientdetails/:id', component: PatientdetailsComponent},
{path: 'patient', component: PatientComponent},
{path: 'patientAppointment/:id', component: PatientAppointmentComponent},
{path: 'schedule/:id', component: ScheduleComponent},
{path: 'doctor', component: DoctorsComponent},
{path: 'doctorAppointment/:DoctorId', component: DoctorAppointmentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
