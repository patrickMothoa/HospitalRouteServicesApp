import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Services/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {

  PatientA
  SetApp
  id
  constructor(public servicess : HospitalService, public route : ActivatedRoute ) {
    this.PatientA = this.servicess.getPatient();
    //for appointment
     this.SetApp = this.servicess.getAppointment();
   }

  addAppt(Date, reason, doctor){
    this.servicess.addAppt(Date, reason, doctor);
  }
  Check(id){
    this.servicess.Check(id);
  }

  delete(Appoint){
    this.servicess.delete(Appoint);
  }
ngOnInit() {
   this.route.paramMap.subscribe(params => {
     this.id = params.get('id');

     this.PatientA = this.servicess.Check(this.id);
  })
}

}
