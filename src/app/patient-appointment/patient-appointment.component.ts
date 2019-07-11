import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Services/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit {

  SetApp
  DoctorId
  id
  constructor(public servicess : HospitalService, public route : ActivatedRoute ) {
 
   }

  addAppt(idz, Date, reason, doctor){
    this.servicess.addAppt(this.id, Date, reason, doctor);
    this.SetApp = this.servicess.DocSchedule(this.id);
    //for doctor
   // this.SetApp = this.servicess.GetDoctors(this.DoctorId);
  }

  Check(id){
    this.servicess.Check(id);
  }

  // CheckeD(DoctorId){
  //   this.servicess. CheckeD(DoctorId);
  // }

  delete(Appoint){
    this.servicess.delete(Appoint);
  }


  // for appoint
  // removeApp(schedule){
  //   this.servicess.removeApp(schedule);
  // }

  // for patient id
  DocSchedule(id){
    this.servicess.DocSchedule(id);
  }
   //for doctor id
  // GetDoctors(DoctorId){
  //   this.servicess.GetDoctors(DoctorId);
  // }

ngOnInit() {
   this.route.paramMap.subscribe(params => {
   this.id = params.get('id');
   this.SetApp = this.servicess.DocSchedule(this.id)

   // for doctor
   //this.DoctorId = params.get('DoctorId');
   // this.SetApp = this.servicess.GetDoctors(this.DoctorId)
  })
}

}
