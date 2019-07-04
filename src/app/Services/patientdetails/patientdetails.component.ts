import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {
    newList
    Patientz;
    id
    

  constructor(public servicess : HospitalService, public route : ActivatedRoute) {
    this.Patientz = this.servicess.getPatient();

   }

   add(name, surname, age, id){
    this.servicess.add(name, surname, age, id);
  }


   Check(id){
      this.servicess.Check(id);
    }

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
       this.id = params.get('id');

       this.Patientz = this.servicess.Check(this.id);
    })
  }

}
