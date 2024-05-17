import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { empty } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent {
message :string="My Message value here";
allAppointments :Appointment[]=[];


 myAppointment :Appointment={
  Id: Date.now(),
Title: "",
AppointmentDate: new Date()
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

    this.myAppointment.Title="";
    this.myAppointment.AppointmentDate=new Date();
  }
}

deleteAppointment(Id :number,Title :string){
 
  if(this.allAppointments.length)
    {
      let arrayIndex :number =this.allAppointments.findIndex(c=>c.Id==Id && c.Title==Title);      
      this.allAppointments.splice(arrayIndex,1);
    }
  
}

}
