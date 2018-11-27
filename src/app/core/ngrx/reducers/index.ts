import * as fromPhoneReducer from '../reducers/phone.reducers';

export interface IndexState {
    phone : fromPhoneReducer.State
}

/**
 *  this will extend root Reducer
 */
export interface State {
    phone : IndexState
}

export const reducers = {
    phone : fromPhoneReducer.reducer
}