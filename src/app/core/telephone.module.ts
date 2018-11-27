import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { CommunicationRecordsComponent } from './components/communication-records/communication-records.component';
import { TelephoneComponent } from './components/telephone/telephone.component';
import { ErrorComponent } from './components/error/error.component';
import { TelephoneRoutingModule } from './telephone-routing.module';
import { FormsModule } from '@angular/forms';

import { PtcCommonModule } from 'pcommon'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effects } from './ngrx/effects/index';

import { reducers } from './ngrx/reducers/index';
import { HookService } from './service/outbound/hook.service';
import { OperatorService } from './service/inbound/operator.service';
import { AuthenticationService } from './service/inbound/authentication.service';

@NgModule({
  declarations: [
    ControlPanelComponent,
    CommunicationRecordsComponent,
    TelephoneComponent,
    ErrorComponent
  ],
  providers: [
    AuthenticationService,
    HookService,
    OperatorService
  ],
  imports: [
    CommonModule,
    FormsModule,
    PtcCommonModule,
    StoreModule.forFeature('phone', reducers),
    EffectsModule.forFeature(effects),
    TelephoneRoutingModule,
  ],
  exports: [
    TelephoneRoutingModule,
    ControlPanelComponent,
    CommunicationRecordsComponent,
    TelephoneComponent,
    ErrorComponent
  ]
})
export class TelephoneModule { }
