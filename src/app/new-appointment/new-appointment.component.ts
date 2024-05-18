import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit

 } from '@angular/core';
import { empty } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

message :string="My Message value here";
allAppointments :Appointment[]=[];


 myAppointment :Appointment={
  Id: Date.now(),
Title: "",
AppointmentDate: new Date()
}

ngOnInit(): void {
  let savedAppointments =localStorage.getItem("myAppointments");
this.allAppointments= savedAppointments? JSON.parse(savedAppointments) :[];
}

saveAppointment(){
if(this.myAppointment.Title.trim().length > 0 && this.myAppointment.AppointmentDate)
  {
    let newAppointment :Appointment={
      Id: Date.now(),
      Title: this.myAppointment.Title,
      AppointmentDate : this.myAppointment.AppointmentDate
    };
    
    this.allAppointments.push(newAppointment);

    localStorage.setItem("myAppointments",JSON.stringify(this.allAppointments));

    this.myAppointment.Title="";
    this.myAppointment.AppointmentDate=new Date();
  }
}

deleteAppointment(index :number){
 
  if(this.allAppointments.length)
    {         
      this.allAppointments.splice(index,1);
      localStorage.setItem("myAppointments",JSON.stringify(this.allAppointments));
    }
  
}

}
