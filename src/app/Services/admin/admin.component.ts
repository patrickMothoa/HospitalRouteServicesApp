import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Patientz
  constructor(public servicess : HospitalService) {
     this.Patientz = this.servicess.getPatient();
   }

   add(name, surname, age, id){
     this.servicess.add(name, surname, age, id);
   }

   Check(id){
    this.servicess.Check(id);
  }


  ngOnInit() {
  }

}
