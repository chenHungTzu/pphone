import { MemberModel } from './../../model/member.model';
import { BreakModel } from './../../model/break.model';
import { CallModel } from './../../model/call.model';
import { Injectable } from "@angular/core";


@Injectable()
export class OperatorService {


    /**
     * 外撥
     * @param model 
     */
    dial(model: CallModel) {

    }

    /**
     * 掛斷
     * @param model 
     */
    haungup(model: CallModel) {

    }

    /**
     * 接聽
     * @param model 
     */
    answer(model: CallModel) {

    }

    /**
     * 休息
     * @param model 
     */
    breakon(model : BreakModel) {

    }

    /**
     * 休息結束
     * @param model 
     */
    breakoff(model : MemberModel) {

    }

    /**
     * 線下作業
     * @param model 
     */
    workon(model : BreakModel) {

    }

    /**
     * 線下作業結束
     * @param model 
     */
    workoff(model : MemberModel) {

    }


}
