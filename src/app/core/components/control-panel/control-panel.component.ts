import { MemberModel } from './../../model/member.model';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as reducers from '../../ngrx/reducers';
import * as fromPhoneAction from '../../ngrx/actions/phone.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  public sLoginID$ : Observable<string>;
  public member : MemberModel = new MemberModel();

  constructor(public store : Store<reducers.State>) { }

  ngOnInit() {

    this.subscription();
  }

  btnLogin($event){
    this.store.dispatch(new fromPhoneAction.Login(this.member));
  }

  btnLogoff($event){
    this.store.dispatch(new fromPhoneAction.Logoff(this.member));
  }

  subscription(){
    this.sLoginID$ = this.store.pipe(
      select(x=>x.phone.phone.loginID)
    )
  }


}
