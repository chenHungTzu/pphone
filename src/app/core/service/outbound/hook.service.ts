import { MemberModel } from './../../model/member.model';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class HookService {

    afterLogin(result : any){
        console.log('afterLogin');
    }

    beforeLogin(model: MemberModel): Observable<any> {
        return Observable.create((obs) => {
            console.log('beforeLogin');
            obs.next(model)

        })
    }

    
    afterLogoff(result : any){
        console.log('afterLogoff');
    }

    beforeLogoff(model: MemberModel) : Observable<any>{
        return Observable.create((obs) => {
            console.log('beforeLogoff');
            obs.next(model)

        })
    }



}