import { MemberModel } from './../../model/member.model';
import { Injectable } from "@angular/core";

@Injectable()
export class HookService {

    constructor() {

    }

    afterLogin(model: MemberModel) {

    }

    beforeLogin(model: MemberModel) {

    }


    afterLogout(model: MemberModel) {

    }

    beforeLogout(model: MemberModel) {

    }


}