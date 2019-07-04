import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  
  PatientList = [{name: 'fana', surname: 'moore', age: '45', id:4505021542208},
                  {name: 'john', surname: 'Doe', age: '61', id:6105021542208},
                  {name: 'pat', surname: 'Nicer', age: '27', id:9205021542208}];

  MyPatient = []

  Appointmentz = [];
  emptyAppointment = true;

    name : string = "";
    surname: string = "";
    age : string = "";
    id : number = null;

   //for appointment
   Date: string = "";
   reason: string = "";
   doctor: string = "";
  
     add(name, surname, age, id){
      this.PatientList.push({name: name, surname: surname, age: age, id: id });

      this.name = "";
      this.surname = "";
      this.age = "";
      this.id = null;

     }

     //for appointment
     addAppt(Date, reason, doctor){
        this.Appointmentz.push({Date: Date, reason: reason, doctor});
        this.Date="";
        this.reason="";
        this.doctor = "";

        this.emptyAppointment = false;
     }

    remove(patList){
      let index = this.PatientList.indexOf(patList)
      this.PatientList.splice(index, 1)
    }


    Check(id){
    
      for(var i=0; i => this.PatientList.length; i++  ){
        if(this.PatientList[i].id  == id){
          return this.PatientList[i];
        }
      }   
    }

    getPatient(){
      return this.PatientList;
    }

  getAppointment(){
      return this.Appointmentz;
  }

  constructor() { }
  
}
