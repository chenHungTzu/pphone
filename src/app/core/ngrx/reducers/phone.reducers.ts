import * as fromPhoneAction from '../actions/phone.actions';


export interface State{
	extension : string,
	loginID : string,
}

export const initialState : State = {
	extension : null,
	loginID : null
}

export function reducer(state :State = initialState, action: fromPhoneAction.Actions) {
	switch (action.type) {
		case fromPhoneAction.LOGIN_SUCCESS:
			return {
				...state ,
				...action.payload.Element
			};
		case fromPhoneAction.LOGOFF_SUCCESS:
			return initialState;
		default:
			return state;
	}
}