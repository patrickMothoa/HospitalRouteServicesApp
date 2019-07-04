import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Services/hospital.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {

  Patient
  
  constructor(public servicess : HospitalService) {
     this.Patient = this.servicess.getAppointment();
   }

  addAppt(Date, reason, doctor){
    this.servicess.addAppt(Date, reason, doctor);
  }
  ngOnInit() {
  }

}
