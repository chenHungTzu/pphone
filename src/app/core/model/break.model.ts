import { MemberModel } from "./member.model";

export class BreakModel extends MemberModel {

    /**
     * 休息時間 , 單位（毫秒）
     */
    time : number ;

    /**
     * 休息原因
     */
    reason : string
}
