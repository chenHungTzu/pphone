import { HttpResponseModel } from 'pcommon';
import { MemberModel } from './../../model/member.model';
import { Action } from "@ngrx/store";


export const LOGOFF = '[Phone] LOGOFF';
export const LOGOFF_SUCCESS = '[Phone] LOGOFF SUCCESS';
export const LOGOFF_FAILED = '[Phone] LOGOFF FAILED';
export const LOGIN =  '[Phone] LOGIN';
export const LOGIN_SUCCESS =  '[Phone] LOGIN SUCCESS';
export const LOGIN_FAILED =  '[Phone] LOGIN FAILED';


export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload : MemberModel ) { }
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload : HttpResponseModel<any>) { }
}


export class LoginFailed implements Action {
    readonly type = LOGIN_FAILED;
    constructor(public payload : HttpResponseModel<any>) { }
}

export class Logoff implements Action {
    readonly type = LOGOFF;
    constructor(public payload : MemberModel ) { }
}

export class LogoffSuccess implements Action {
    readonly type = LOGOFF_SUCCESS;
    constructor(public payload : HttpResponseModel<any>) { }
}

export class LogoffFailed implements Action {
    readonly type = LOGOFF_FAILED;
    constructor(public payload : HttpResponseModel<any> ) { }
}

export type Actions = Login         |
                      LoginSuccess  |
                      LoginFailed   |
                      Logoff        |
                      LogoffFailed  | 
                      LogoffSuccess;
