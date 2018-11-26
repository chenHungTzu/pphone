import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { CommunicationRecordsComponent } from './components/communication-records/communication-records.component';
import { TelephoneComponent } from './components/telephone/telephone.component';
import { ErrorComponent } from './components/error/error.component';
import { TelephoneRoutingModule } from './telephone-routing.module';

@NgModule({
  declarations: [
    ControlPanelComponent, 
    CommunicationRecordsComponent, 
    TelephoneComponent, 
    ErrorComponent
  ],
  imports: [
    CommonModule,
    TelephoneRoutingModule
  ]
})
export class TelephoneModule { }
