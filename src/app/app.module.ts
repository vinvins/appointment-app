import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListsComponent } from './appointment-lists/appointment-lists.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListsComponent,
    NewAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
