import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  
  PatientList = [{name: 'Fana', surname: 'Mothoa', age: '45', id:4505021542208},
                  {name: 'John', surname: 'Doe', age: '61', id:6105021542208},
                  {name: 'Pat', surname: 'Nicer', age: '27', id:9205021542208}];

  DoctorList = [{DoctorId: 6585458822555, Docname: 'Dr.Lefhuno', DocSurname: 'Mulaudzi', Specialisation: 'Surgeon' },
                 {DoctorId: 8011235425325, Docname: 'Dr.Krishner', DocSurname: 'Naidoo', Specialisation: 'Physio'}]

  Appointmentz = [];
   emptyAppointment = true;

    name : string = "";
    surname: string = "";
    age : string = "";
    id : number = null;

    DoctorId: number = null;
    Docname : string = "";
    DocSurname: string = "";
    Specialisation: string="";


   //for appointment
   Date: string = "";
   reason: string = "";
   doctor: number = null;
  
     add(name, surname, age, id){
      this.PatientList.push({name: name, surname: surname, age: age, id: id });

      this.name = "";
      this.surname = "";
      this.age = "";
      this.id = null;

     }

     addDoc(DoctorId,Docname,DocSurname,Specialisation ){
       this.DoctorList.push({DoctorId: DoctorId, Docname: Docname, DocSurname: DocSurname, Specialisation: Specialisation})
       
       this.DoctorId = null;
       this.Docname = "";
       this.DocSurname = "";
       this.Specialisation = "";
     }
         // to show Appointment for patient id
     DocSchedule(id){
         let selectedApp = []
         this.Appointmentz.forEach(setter =>{
           if(setter.id == id){
             selectedApp.push(setter)
           }
         })
         return selectedApp
     }
         // method for doctor via id
    //  GetDoctors(DoctorId){
    //   let selectedAppz = []
    //   this.Appointmentz.forEach(setter =>{
    //     if(setter.doctorz == DoctorId){
    //       selectedAppz.push(setter)
    //     }
    //   })
    //   return selectedAppz
    //  }

     //for appointment
     addAppt(idz, Date, reason, doctor){
        this.Appointmentz.push({id: idz, Datez: Date, reasonz: reason, doctorz: doctor});

      //  if(this.Appointmentz.length > 0){
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

    CheckeD(DoctorId){
      for(var x=0; x => this.DoctorList.length; x++  ){
        if(this.DoctorList[x].DoctorId  == DoctorId){
          return this.DoctorList[x];
        }
      } 
    }

    getPatient(){
      return this.PatientList;
    }

    getDoctor(){
      return this.DoctorList;
    }

    //code for added new array
  getAppointment(){
      return this.Appointmentz;
  }

  // getAppList(){
  //   return this.MyAppointmentList;
  // }

  delete(Appoint){
    let index = this.Appointmentz.indexOf(Appoint)
    this.Appointmentz.splice(index, 1);
     
  }

  // removeApp(schedule){
  //   let index = this.MyAppointmentList.indexOf(schedule)
  //   this.MyAppointmentList.splice(index, 1);
  // }

  EditPat(Listedpatients){
    let index = this.PatientList.indexOf(Listedpatients);
    let names=prompt("edit date:", Listedpatients.name);
    let surnames=prompt("edit surname", Listedpatients.surname);
    let ages=prompt("edit age:", Listedpatients.age);

     if(names != null || surnames != null || ages != null ){
         this.PatientList[index].name=names;
         this.PatientList[index].surname=surnames;
         this.PatientList[index].age=ages;
     }

  }

  constructor() { }
  
}
