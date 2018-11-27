import { MemberModel } from './../../model/member.model';
import { Injectable, Optional } from "@angular/core";
import { HttpService } from 'pcommon';
import { HttpResponseModel } from 'pcommon';
import { Observable } from 'rxjs';


@Injectable()
export class AuthenticationService {

    constructor(@Optional() public http: HttpService) {

    }

    /**
     * 登入
     * @param model 
     */
    login(model: MemberModel): Observable<HttpResponseModel<any>> {

        return this.http.post<HttpResponseModel<any>>(
            {
                hostUrl: 'http://172.20.10.2/Ptc.Product.Phone.WebApi/Api/Telephone/Login',
                responseType: 'json',
                body: model
            })
    }

    /**
     * 登出
     * @param model 
     */
    logoff(model: MemberModel): Observable<HttpResponseModel<boolean>> {

        return this.http.post<HttpResponseModel<boolean>>(
            {
                hostUrl: 'http://172.20.10.2/Ptc.Product.Phone.WebApi/Api/Telephone/LogOff',
                responseType: 'json',
                body: model
            })
    }
}

