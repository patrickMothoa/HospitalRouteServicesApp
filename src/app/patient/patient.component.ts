import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Services/hospital.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  Patientz
  constructor(public servicess : HospitalService) {
     this.Patientz = this.servicess.getPatient();
   }

  //  add(name, surname, age, id){
  //    this.servicess.add(name, surname, age, id);
  //  }

  ngOnInit() {
  }

}
