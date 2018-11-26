import { AuthenticationModel } from './authenication.model';

export class MemberModel extends AuthenticationModel {
    
    /**
     * 登入的話機
     */
    extension : string 

    /**
     * 使用者登入代碼
     */
    loginID : string

    
}
