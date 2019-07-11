import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../Services/hospital.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  Doctorz
  constructor(public servicess : HospitalService) {
     this.Doctorz = this.servicess.getDoctor();
   }

   addDoc(DoctorId,Docname,DocSurname,Specialisation ){
     this.servicess.addDoc(DoctorId,Docname,DocSurname,Specialisation );
   }

  ngOnInit() {
  }

}
