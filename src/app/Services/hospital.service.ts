import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  
  PatientList = [{name: 'Fana', surname: 'Mothoa', age: '45', id:4505021542208},
                  {name: 'John', surname: 'Doe', age: '61', id:6105021542208},
                  {name: 'Pat', surname: 'Nicer', age: '27', id:9205021542208}];

  MyPatient = []

  Appointmentz = [];
  // emptyAppointment = true;

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

      //  if(this.addAppt.length > 0){
      //   this.emptyAppointment = false;
      //  } 
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

    //code for added new array
  getAppointment(){
      return this.Appointmentz;
  }

  delete(Appoint){
    let index = this.Appointmentz.indexOf(Appoint)
    this.Appointmentz.splice(index, 1);
     
  }

  EditPat(Listedpatients){
    let index = this.PatientList.indexOf(Listedpatients)
    this.PatientList[index].name = prompt("Edit name:");
    this.PatientList[index].surname = prompt("Edit surname:");
    this.PatientList[index].age = prompt("Edit age:")
  }

  constructor() { }
  
}
