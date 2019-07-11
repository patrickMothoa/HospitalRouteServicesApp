import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Patientz
  angForm: FormGroup;

  constructor(public servicess : HospitalService, public fb: FormBuilder ) {
     this.Patientz = this.servicess.getPatient();

     this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       surname: ['', Validators.required ],
       age: ['', Validators.required ],
       id: ['', Validators.required ]
    });
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
