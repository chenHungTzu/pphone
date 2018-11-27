import { HookService } from './../../service/outbound/hook.service';
import { AuthenticationService } from './../../service/inbound/authentication.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromPhoneAction from '../actions/phone.actions';
import { map, exhaustMap, concatMap, flatMap, mergeMap, tap, catchError } from 'rxjs/operators';
import { iif, of } from 'rxjs';

@Injectable()
export class PhoneEffects {
    constructor(
        private actions$: Actions,
        private auth: AuthenticationService,
        private hook: HookService
    ) { }

    @Effect({ dispatch: true })
    login$ = this.actions$
        .pipe(
            ofType(fromPhoneAction.LOGIN),
            map((action: fromPhoneAction.Login) => action.payload),
            exhaustMap(payload => {

                const m = this.auth.login(payload).pipe(
                    concatMap(result => iif(() => result.IsSuccess,
                        of(new fromPhoneAction.LoginSuccess(result)),
                        of(new fromPhoneAction.LoginFailed(result)),
                    ))
                )
                const b = this.hook.beforeLogin(payload).pipe(
                    mergeMap(() => m)
                )

                return m;
            }),
            catchError((err , obs)=>{
                console.log(err);
                return obs
            })

        )
    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$
        .pipe(
            ofType(fromPhoneAction.LOGIN_SUCCESS),
            map((action: fromPhoneAction.LoginSuccess) => action.payload),
            tap(payload => {
                console.log(payload);
                this.hook.afterLogin(payload)
            })
        )
    @Effect({ dispatch: false })
    loginFailed$ = this.actions$
        .pipe(
            ofType(fromPhoneAction.LOGIN_FAILED),
            map((action: fromPhoneAction.LoginSuccess) => action.payload),
            tap(payload => {
                console.log(payload);
                this.hook.afterLogin(payload)
            })
        )



    @Effect({ dispatch: true })
    logoff$ = this.actions$
        .pipe(
            ofType(fromPhoneAction.LOGOFF),
            map((action: fromPhoneAction.Logoff) => action.payload),
            exhaustMap(payload => {

                const m = this.auth.logoff(payload).pipe(
                    concatMap(result => iif(() => result.IsSuccess,
                        of(new fromPhoneAction.LogoffSuccess(result)),
                        of(new fromPhoneAction.LogoffFailed(result)),
                    ))
                )
                const b = this.hook.beforeLogin(payload).pipe(
                    mergeMap(() => m)
                )

                return m;
            }),
            catchError((err , obs)=>{
                console.log(err);
                return obs
            })

        )
    @Effect({ dispatch: false })
    logoffSuccess$ = this.actions$
        .pipe(
            ofType(fromPhoneAction.LOGOFF_SUCCESS),
            map((action: fromPhoneAction.LogoffSuccess) => action.payload),
            tap(payload => {
                console.log(payload);
                this.hook.afterLogoff(payload)
            })
        )
    @Effect({ dispatch: false })
    logoffFailed$ = this.actions$
        .pipe(
            ofType(fromPhoneAction.LOGOFF_FAILED),
            map((action: fromPhoneAction.LoginFailed) => action.payload),
            tap(payload => {
                console.log(payload);
                this.hook.afterLogin(payload)
            })
        )


}