import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Services/hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

//   PatientA
//   SetApp
//   List

//   id
//   doctor
  constructor(public servicess : HospitalService, public route : ActivatedRoute ) {
   // this.PatientA = this.servicess.getPatient();
    //for appointment
    // this.SetApp = this.servicess.getAppointment();
     // for schedule
     //this.List = this.servicess.getAppList();
   }

//     Check(id){
//       this.servicess.Check(id);
//    }

//    DocSchedule(doctor){
//      this.servicess.DocSchedule(doctor);
//    }


//   //  removeApp(schedule){
//   //    this.servicess.removeApp(schedule);
//   //  }

  ngOnInit()  {
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    //   this.doctor = params.get('doctor');
 
    //   this.PatientA = this.servicess.Check(this.id);
    //   this.SetApp = this.servicess.DocSchedule(this.doctor)
   //})
 }

 }
